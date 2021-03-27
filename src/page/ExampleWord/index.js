import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import handlePress from "../../utils/handle-press.js";

import { exampleWords } from "../../constent/word";

import Word from "../../components/Word";

const ExampleWord = () => {
  const history = useHistory();
  const [start, setStart] = useState(new Date().getTime());
  const [time, setTime] = useState(0);
  const [index, setIndex] = useState(0);

  console.log(exampleWords);

  const handleCountinue = () => {
    history.push("/exapmle-audio");
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleEvent = (event) => {
    const { key, end } = handlePress(event);
    console.log("this is key:", key);
    console.log("this is end:", end);

    const result = end - start;
    const seconds = (result % 60000) / 1000;
    console.log("this is seconds", seconds);
    setTime(seconds);
    setIndex(index + 1);

    if (index + 1 === 5) {
      history.push("/example-audio");
    }
  };

  useEffect(() => {
    console.log("this is start:", start);
    window.addEventListener("keydown", handleEvent);
    console.log("inside useEffect ExampleWord");

    return function cleanupListener() {
      window.removeEventListener("keydown", handleEvent);
    };
  });

  return (
    <div>
      <h1>ExampleWord page</h1>
      <Word words={exampleWords} index={index} />
      <div>
        <button onClick={handleCountinue}>continue</button>
        <button onClick={handleBack}>back</button>
      </div>
    </div>
  );
};

export default ExampleWord;
