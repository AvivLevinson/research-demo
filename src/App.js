import React, { useState, useEffect } from "react";

import firebase from "./firebase";

import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  WordInstructions,
  ExampleWord,
  WordResearch,
  AudioInstructions,
  ExampleAudio,
  AudioResearch,
  FormPage
} from "../src/page";

import { DataProvider } from "./context/DataContext";



const Entry = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/word-instruction" component={WordInstructions} />
        <Route path="/example-word" component={ExampleWord} />
        <Route path="/word-research" component={WordResearch} />
        <Route path="/audio-instruction" component={AudioInstructions} />
        <Route path="/example-audio" component={ExampleAudio} />
        <Route path="/audio-research" component={AudioResearch} />
        <Route path="/form" component={FormPage} />
      </Switch>
    </Router>
  );
};

export default function App() {
  const [randomAction, setRandomAction] = useState({});

  const docRef = firebase.firestore().collection("randomAction").doc("action");

  const getRandomAction = () => {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          let { randomNumber, handAction } = doc.data();
          console.log(randomNumber);
          console.log(handAction);
          changeRandomAction(randomNumber,handAction );
          setRandomAction({ randomNumber:randomNumber
            , handAction:handAction });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

      
  };
/**
  const createUser = ()=>{
    const docUserRef = firebase.firestore().collection("users").add({user});
  }
  */

  const readDataUser = ()=>{
    firebase.firestore().collection("users")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const data = JSON.stringify(doc.data());
            console.log(data);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    })
  }



  const changeRandomAction = (randomNumber,handAction) => {
    let updateRandomNumber = !randomNumber;
    let updateRandomHandAction = !handAction;

    console.log('this is random number: ', randomNumber);
    console.log('this is random handAction: ', handAction);


    console.log('this is random updateRandomNumber: ', updateRandomNumber);
    console.log('this is random updateRandomHandAction: ', updateRandomHandAction);

    
    docRef
      .update({
        randomNumber: updateRandomNumber,
        handAction: updateRandomHandAction
      })
      .then(() => {
        console.log("Document successfully updated!");
        readDataUser();
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };


  const getAudioFile = ()=>{

  }



    useEffect(()=>{
      getRandomAction();
    },[]);
 

  return (
    <DataProvider randomAction={randomAction}>
      <Entry />
    </DataProvider>
  );
}
