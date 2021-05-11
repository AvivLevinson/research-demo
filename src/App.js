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
          setRandomAction({ randomNumber, handAction });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

      changeRandomAction();
  };

  const changeRandomAction = () => {
    let {randomNumber,handAction } = randomAction;
    docRef
      .update({
        randomNumber: !randomNumber,
        handAction: !handAction
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

    useEffect(()=>{
      getRandomAction();
    },[]);
 

  return (
    <DataProvider randomAction={randomAction}>
      <Entry />
    </DataProvider>
  );
}
