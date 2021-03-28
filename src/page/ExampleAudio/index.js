import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import handlePress from '../../utils/handle-press.js';

//import audio_test from '../../constent/audio/audio_test.mp3';

//import PlayerSound from '../../components/PlayerSound';

import Sound from '../../components/Sound';


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
    console.log('inside useEffect Example Audio');

    return function cleanupListener() {
      window.removeEventListener('keydown', handlePress);
    } 


  });

  return (
    <div> 
      <h1>ExampleAudio page</h1>
      <div>
      <Sound url={"test"}/>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default ExampleAudio;

/*
  return (
    <div> 
      <h1>ExampleAudio page</h1>
      <div>
      <Sound/>
      <PlayerSound url ={audio_test}/>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );

*/ 