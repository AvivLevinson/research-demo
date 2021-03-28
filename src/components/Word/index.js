import React,{useEffect, useState} from 'react';

import {COLOR} from '../../constent/color';

import handlePress from '../../utils/handle-press.js';

const Word = ({words, index, setIndex})=>{

  const [start, setStart] = useState(new Date().getTime());
  const [time, setTime] = useState(0);

  const handleEvent = (event) => {
    const { key, end } =  handlePress(event);
    console.log("key:", key);
    const result = end - start;
    const seconds = (result % 60000) / 1000;
    console.log("seconds", seconds);

    setTime(seconds);
    setIndex((prev)=>{
      console.log('prev:', prev);
      return prev+1;
    }); 

  };

  useEffect(() => {
    console.log("useEffect Word\n index:", index);
    window.addEventListener("keydown", handleEvent);

    return function cleanupListener() {
      console.log("clean up useEffect Word");
      window.removeEventListener("keydown", handleEvent);
    };
  },[]);




  return( 
  <div>
  <p>{words[index]}</p>
  </div>
  );

}

export default Word;