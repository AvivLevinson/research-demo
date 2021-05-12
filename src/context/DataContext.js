import React,{useState, useContext, useEffect} from 'react';

import {allWord ,WORD_EMOTIONAL, WORD_NEUTRAL} from '../constent/word'

const DataContext = React.createContext();

export const DataProvider = ({children, randomAction})=>{
  const [researchResult, setResearchResult] = useState([]);
  const [data, setData] = useState({words: [] , audios:[] });

  useEffect(()=>{
    const wordsData =createWordsData();
    console.log(wordsData);
    setData({words: wordsData });
  },[]);

const setNewResult = (data) =>{
  console.log(data);

  setResearchData((prev)=>{
    return [prev, data]; 
  })
};

// fill the color array and the voice name
const fillArray = (value, len)=>{
  let array = [];
  for (let i = 0; i < len; i++) {
      let index = i % 2; 
      array.push(value[index]);
  }
  return array;
}

// shuffle ( mix ) the array value for random : send - allWord, allAudio, allColor
const shuffle = (array)=>{
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const checkCatagory = (word)=>{
  let isWordEmotional = WORD_EMOTIONAL.includes(word);
  let isWordNetural = WORD_NEUTRAL.includes(word);

  if(isWordEmotional === true && isWordNetural ===false){
    return 'EMOTIONAL';
  } else if (isWordNetural === true && isWordEmotional=== false ){
    return 'NEUTRAL';
  } else {
    console.log(`cant find catagory of word: ${word} please check if the word exsits in the list`);
    return 'none'
  }

}

const createWordsData = ()=>{

  let colors = shuffle(fillArray(['red', 'blue'],40));
  let words = shuffle(allWord);

  let key1, key2;
  if(randomAction.handDir){
    key1='left';
    key2='right';

  } else{
    key1='right';
    key2='left';
  }

  let wordsData = words.map((element,index)=>{
    return {
        word: element,
        color: colors[index],
        correctKey: colors[index] === 'red'? key1 : key2,
        catagory: checkCatagory(element),
    }
  });

  return wordsData;

}


  return(
    <DataContext.Provider value={{
      randomAction,
      setNewResult,
      data
    }}>
    {children}

    </DataContext.Provider>
  );
}

export const useData = ()=> useContext(DataContext);