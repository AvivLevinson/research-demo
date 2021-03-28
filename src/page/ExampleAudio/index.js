import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import handlePress from '../../utils/handle-press.js';

import {exampleAudioMp3} from '../../constent/audio';

import PlayerSound from '../../components/PlayerSound';


const ExampleAudio = ()=>{
  const history = useHistory();

  console.log(exampleAudioMp3);

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
      <h1>Example Audio page</h1>
      <div>
      <PlayerSound url={exampleAudioMp3[0]}/>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default ExampleAudio;
