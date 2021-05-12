import React, { useEffect, useState,useRef } from "react";
import './Word.css';

import { COLOR } from "../../constent/color";

import handlePress from "../../utils/handle-press.js";






const randomColor = ()=>{
  return COLOR[Math.round(Math.random())];
}



const Word = ({ words, index, setIndex, dispatch }) => {
  const start = new Date().getTime();
  const [render, setrender] = useState(0);
  //const [start, setStart] = useState(new Date().getTime());
  const color = randomColor();


  const myColorRef = useRef(color);
  const myStateRef = useRef(start);
  const myIndexRef = useRef(index);
  
  myColorRef.current = color;
  myIndexRef.current = index;
  myStateRef.current = start;
  
  const mystyle  ={
    color:myColorRef.current,
    fontSize: 50,

  }


  const handleEvent = (event) => {
    const color = myColorRef.current;
    const index = myIndexRef.current;
    const start =  myStateRef.current;
    const { key, end } = handlePress(event);
    const result = end - start;
    const seconds = (result % 60000) / 1000;

    dispatch({
      type: "SET_RESULT",
      payload: {
        word: words[index],
        keyPress: key,
        color: color,
        time: seconds
      }
    });

    setIndex((prev) => {
      myIndexRef.current =  prev +1;
      return prev +1});

    setrender(true);
    // set timer 0.5 second
/*    setTimeout(function () {
      setIndex((prev) => {
        return prev + 1;
      });
    }, 500);*/ 
  };

  useEffect(() => {
    console.log("useEffect start: ", start);
  
    window.addEventListener("keydown", handleEvent);

    return function cleanupListener() {
      console.log("clean up useEffect Word");
      window.removeEventListener("keydown", handleEvent);
    };
  }, []);

  return (
    <div>

      <p style={mystyle}>{words[index]}</p>
    </div>
  );
};

export default Word;
