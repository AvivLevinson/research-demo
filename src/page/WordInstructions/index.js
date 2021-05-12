import React from 'react';
import {useHistory} from 'react-router-dom';

import CustomHandAction from '../../components/CustomeHandAction';
import CustomAlert from '../../components/CustomAlert'

import {useData} from '../../context/DataContext';

const WordInstructions = ()=>{
  const {randomNumber, handAction} = useData();

  const history = useHistory();

  const handleCountinue = ()=>{
    history.push('/example-word');

  }

  const handleBack = ()=>{
    history.goBack();
  }

  return (
    <div className = "container"> 
      <h1>בניסוי הזה, המטלה שלך היא לזהות את צבע המילה שתופיע על המסך</h1>
      <h1>את/ה צריך ללחוץ על המקש המתאים לצבע. כדי לקבוע את צבע המילה נא ללחוץ על המקשים ימינה ושמאלה בשביל אדום וכחול בהתאמה.</h1>
      <h1>להמשך להדגמה של הניסוי נא ללחוץ על ההמשך</h1>
      {handAction? <CustomHandAction/> : <></>

      }
      
      <div className="containerButton">
      <button onClick ={handleCountinue}>לחץ להמשך</button>  
      <button onClick ={handleBack}>חזור אחורה</button>  
      </div>      
    </div>
  );
}

export default WordInstructions;