import React, { useEffect, useState, useReducer } from "react";
import { useHistory } from "react-router-dom";
import './ExampleWord.css';


import { exampleWords } from "../../constent/word";
import Word from "../../components/Word";
import Counter from "../../components/Counter";





const ExampleWord = () => {
  const [visibleCunter, setVisibleCounter] = useState(true);

  const [index, setIndex] = useState(0);
  
  const history = useHistory();

  
  const handleCountinue = () => {
    history.push("/word-research");
  };

  const handleBack = () => {
    history.goBack();
  };

  useEffect(()=>{
    console.log('useEffect Example Page');

    if (index  === 6) {
      history.push("/word-research");
    }
  });


/**  const handleEvent = (event) => {
    const { key, end } = handlePress(event);
    console.log("this is key:", key);
    console.log("this is end:", end);

    const result = end - start;
    const seconds = (result % 60000) / 1000;
    console.log("this is seconds", seconds);
    setTime(seconds);
    setIndex(index + 1);

    if (index + 1 === 5) {
      history.push("/example-audio");
    }
  };

  useEffect(() => {
    console.log("this is start:", start);
    window.addEventListener("keydown", handleEvent);
    console.log("inside useEffect ExampleWord");

    return function cleanupListener() {
      console.log("inside clean up function");
      window.removeEventListener("keydown", handleEvent);
    };
  }); */

  return (
    <>
   
    {visibleCunter ? (<div className="container">
      <h1>הדגמה תחל בעוד</h1>
      < Counter setVisibleCounter={setVisibleCounter}/>

    </div> ) : (
      <div className="container">     
       <Word words={exampleWords} index={index} setIndex={setIndex} />
       
       <h4>לחץ ימני = אדום</h4>
       <h4>לחץ שמאלי = כחול</h4>
       <div>
        <button onClick={handleCountinue}>continue</button>
        <button onClick={handleBack}>back</button>
      </div>
       </div>
      ) 
    }
    
  </>
  );
};

export default ExampleWord;
