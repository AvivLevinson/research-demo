import React,{useEffect} from "react";
//import audio_test_mp3 from '../../constent/audio/audio_test.mp3';

const PlayerSound = ({ url }) => {
  let audio = new Audio(url);

  useEffect(()=>{
    console.log('Player Sound useEffect');
    audio.play();

    return function cleanupListener() {
      console.log("clean up useEffect Word");
      audio.pause();
    };
  },[]);

  return (
    <div>
      <p>play audio</p>
    </div>
  );
};

export default PlayerSound;
