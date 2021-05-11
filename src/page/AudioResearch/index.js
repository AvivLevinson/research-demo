import React from 'react';
import {useHistory} from 'react-router-dom';

import {useData} from '../../context/DataContext'

const AudioResearch = ()=>{
  const history = useHistory();
  const {randomAction} = useData();


  const handleCountinue = ()=>{
    if(randomAction.randomNumber === 1){
      // check the consition
        history.push('/word-instruction');

    } else{
      history.push('/form-instruction');
    }


  }

  const handleBack = ()=>{
    history.goBack();
  }

  return (
    <div> 
      <h1>AudioResearch page</h1>
      <div>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default AudioResearch;