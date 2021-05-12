import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {useData} from '../../context/DataContext'

import Counter from '../../components/Counter';
import Word from '../../components/Word';


const WordResearch = ()=>{
  const [index, setIndex] = useState(0);
  const [visibleCunter, setVisibleCounter] = useState(true);
  
  const {randomAction,setNewResult, data} = useData();
  
  const {words} = data;
  const history = useHistory();



  const handleCountinue = ()=>{
    if(!randomAction.randomNumber){
      history.push('/audio-instruction');
    } else{
      history.push('/form');
    }


  }

  const handleBack = ()=>{
    history.goBack();
  }


  useEffect(()=>{
    if(index+1 === 40 ){
      handleCountinue();

    }
  },[index]);

  return (
    <div> 
      {visibleCunter ? (
        <>
        <h1>הניסוי יחל בעוד </h1>
        <Counter setVisibleCounter={setVisibleCounter}/>
        </>
      )  : (
        <div>
        <Word index = {index} setIndex={setIndex} words={words} setNewResult = {setNewResult} />
        <button onClick ={handleCountinue}>continue</button>  
        <button onClick ={handleBack}>back</button>  
        </div>      
      ) }
    </div>
  );
}

export default WordResearch;