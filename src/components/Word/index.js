import React, { useEffect, useState,useRef } from "react";
import './Word.css';

import handlePress from "../../utils/handle-press.js";

import CustomAlert from '../CustomAlert'




const Word = ({ words, index, setIndex, setNewResult=false }) => {
  
  const start = new Date().getTime();
  const [trial, setTrial] = useState(0);
  const [showAlert, setShowAlert] = useState(false)
  //const [start, setStart] = useState(new Date().getTime());


  const myTrialNumberRef = useRef(trial);
  const myStateRef = useRef(start);
  const myIndexRef = useRef(index);
  
 
  myIndexRef.current = index;
  myStateRef.current = start;
  myTrialNumberRef.current = trial;
  
  const mystyle  ={
    color:words[index].color,
    fontSize: 50,

  }


  const handleEvent = (event) => {
    const index = myIndexRef.current;
    const start =  myStateRef.current;
    const trial = myTrialNumberRef.current + 1
    const { key, end } = handlePress(event);
    let show = key === 'worng' ? setShowAlert(true) : 'none';

    const result = end - start;
    const seconds = (result % 60000) / 1000;

  
    const  resultReserach =  {
      ACC: words[index].correctKey === key ? 1 : 0,
      CorrectKey:words[index].correctKey,
      ParticipantKey:key,
      RT:seconds,
      catgory: words[index].catgory,
      stimuli: words[index].word,
      wordsColorOrMen:words[index].color,
      trial:trial

    }

    console.log(resultReserach)
    
    setIndex((prev) => {
      myIndexRef.current =  prev +1;
      return prev +1
    });

      setTrial((prev)=>{
        return prev+1;
      })
    // set timer 0.5 second
/*    setTimeout(function () {
      setIndex((prev) => {
        return prev + 1;
      });
    }, 500);*/ 
  };

  const setTimerForAlear = ()=>{
    setTimeout(
      ()=> {
        setShowAlert(false);
    }, 3000);

  }

  useEffect(() => {
    console.log("useEffect start: ", start);
  
    document.addEventListener("keydown", handleEvent);

    return function cleanupListener() {
      console.log("clean up useEffect Word");
      document.removeEventListener("keydown", handleEvent);
    };
  }, []);




  useEffect(()=>{
    if(showAlert===true){
    setTimerForAlear();
    }

  },[showAlert]);

  return (
    <div>
      { showAlert ? 
        ( <>
            <CustomAlert/>
          </>) : 
        (

          <p style={mystyle}>{words[index].word}</p>
        )
      }
    </div>
  );
};

export default Word;
