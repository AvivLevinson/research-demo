import React from 'react';
import {useHistory} from 'react-router-dom';

import {useData} from '../../context/DataContext'


const WordResearch = ()=>{
  const history = useHistory();
  const {randomAction} = useData();


  const handleCountinue = ()=>{
    if(randomAction.randomNumber === 0){
      history.push('/audio-instruction');
    } else{
      history.push('/form');
    }


  }

  const handleBack = ()=>{
    history.goBack();
  }

  return (
    <div> 
      <h1>Second Research page </h1>

      
      
      <div>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default WordResearch;