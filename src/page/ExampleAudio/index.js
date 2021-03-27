import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import handlePress from '../../utils/handle-press.js';

import soundfile from '../../constent/audio/audio_test.mp3';

import PlayerSound from '../../components/PlayerSound';


const ExampleAudio = ()=>{
  const history = useHistory();

  const handleCountinue = ()=>{
    history.push('/first-research');

  }

  const handleBack = ()=>{
    history.goBack();
  }


  useEffect(()=>{
    window.addEventListener("keydown", handlePress);
    console.log('inside useEffect ExampleWord');

    return function cleanupListener() {
      window.removeEventListener('keydown', handlePress);
    } 


  });

  return (
    <div> 
      <h1>ExampleAudio page</h1>
      <div>
      <PlayerSound url ={soundfile}/>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default ExampleAudio;