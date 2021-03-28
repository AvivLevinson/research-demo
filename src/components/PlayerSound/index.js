import React,{useEffect,useState, useRef} from "react";
//import audio_test_mp3 from '../../constent/audio/audio_test.mp3';

import handlePress from "../../utils/handle-press.js";


const PlayerSound = ({ exampleAudioMp3, index, setIndex, dispatch }) => {
  
  const audio = new Audio(exampleAudioMp3[index]);
  const start = new Date().getTime();
  const [render, setrender] = useState(0);

  const myStateRef = useRef(start);
  const myIndexRef = useRef(index);
  const myAudioRef = useRef(audio);

  myAudioRef.current = audio;
  myIndexRef.current = index;
  myStateRef.current = start;



  const handleEvent = (event) => {
    const audio = myAudioRef.current;
    const index = myIndexRef.current;
    const start =  myStateRef.current;
    const { key, end } = handlePress(event);
    const result = end - start;
    const seconds = (result % 60000) / 1000;

    dispatch({
      type: "SET_RESULT",
      payload: {
        audioVoice: exampleAudioMp3[index],
        keyPress: key,
        time: seconds
      }
    });
    audio.pause();
    setIndex((prev) => {
      myIndexRef.current =  prev +1;
      
      return prev +1});

    setrender(true);
    // set timer 0.5 second
/*    setTimeout(function () {
      setIndex((prev) => {
        return prev + 1;
      });
    }, 500);*/ 
  };

useEffect(() => {
  console.log('first useEffect');  
    window.addEventListener("keydown", handleEvent);

    return function cleanupListener() {
      console.log("clean up keydown event");
      window.removeEventListener("keydown", handleEvent);
    };
  }, []);


  useEffect(()=>{
    console.log('second useEffect');
    audio.play();

    return function cleanupListener() {
      console.log("clean up audio.pause()");
      audio.pause();
    };
  });

  return (
    <div>
      <p>play audio</p>
    </div>
  );
};

export default PlayerSound;
