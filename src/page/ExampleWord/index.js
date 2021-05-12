import React, { useEffect, useState, useReducer } from "react";
import { useHistory } from "react-router-dom";
import './ExampleWord.css';

import handlePress from '../../utils/handle-press'

import { useData } from '../../context/DataContext';

import Counter from "../../components/Counter";
import CustomAlert from "../../components/CustomAlert";


const ExampleWord = () => {
  const [visibleCunter, setVisibleCounter] = useState(true);
  const [visibleButtonContinue, setVisibleButtonContinue] = useState(false);
  const [index, setIndex] = useState(0);

  const {exampleWords,keysAndColors} = useData();
  const history = useHistory();



  const handleCountinue = () => {
    history.push("/word-research");
  };

  const handleBack = () => {
    history.goBack();
  };


const handleEvent = (event) => {
    const { key } = handlePress(event);

    if(key === exampleWords[index].correctKey){

      setIndex((prev)=>prev+1);
    } else{ 
      console.log('wornk key please try agin');
    }
  };

  useEffect(()=>{
    if(index+1 === 5){
      setVisibleButtonContinue(true)
    }
  },[index]);
  


  useEffect(() => {
    if(index+1 !== 5){
      document.addEventListener("keydown", handleEvent);
    }
   
    return function cleanupListener() {
      document.removeEventListener("keydown", handleEvent);
    };
  });

const color = exampleWords[index].color;
const word = exampleWords[index].word;

  return (
    <>
   
    {visibleCunter ? (<div className="container">
      <h1>הדגמה תחל בעוד</h1>
      < Counter setVisibleCounter={setVisibleCounter}/>

    </div> ) : (
      <div className="container">     
      
      <p style={{color: color}}>{word}</p>

       <h4>{keysAndColors.keyAarrow1.color}  = {keysAndColors.keyAarrow1.key}</h4>
       <h4>{keysAndColors.keyAarrow2.color}  = {keysAndColors.keyAarrow2.key}</h4>
       <div>
        { 
          visibleButtonContinue ? 
          ( <button onClick={handleCountinue}>continue</button> )
           : (<div/>)
        }
      </div>
       </div>
      ) 
    }
    
  </>
  );
};

export default ExampleWord;
