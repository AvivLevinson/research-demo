import React, { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";


import { exampleAudioMp3 } from "../../constent/audio";

import PlayerSound from "../../components/PlayerSound";

import Counter from "../../components/Counter";

import reducer from "../../reducer/audio/reducer.js";

const ExampleAudio = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, []);
  const [visibleCunter, setVisibleCounter] = useState(true);
  const [index, setIndex] = useState(0);

  console.log(state);

  const handleCountinue = () => {
    history.push("/first-research");
  };

  const handleBack = () => {
    history.goBack();
  };

  useEffect(()=>{
    console.log('useEffect Example Page');

    if (index  === 5) {
      history.push("/first-research");
    }
  });


/**
  useEffect(() => {
    window.addEventListener("keydown", handlePress);
    console.log("inside useEffect Example Audio");

    return function cleanupListener() {
      window.removeEventListener("keydown", handlePress);
    };
  });

   */
  return (
    <>
      {visibleCunter ? (
        <div className="container">
          <h1>הדגמה תחל בעוד</h1>
          <Counter setVisibleCounter={setVisibleCounter} />
        </div>
      ) : (
        <div className="container">
          <PlayerSound
            exampleAudioMp3={exampleAudioMp3}
            index={index}
            setIndex={setIndex}
            dispatch={dispatch}
          />

          <h4>לחץ ימני = יוסי</h4>
          <h4>לחץ שמאלי = בני</h4>
          <div>
            <button onClick={handleCountinue}>continue</button>
            <button onClick={handleBack}>back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExampleAudio;
