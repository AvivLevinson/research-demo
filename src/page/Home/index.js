import React from "react";

import {useData} from '../../context/DataContext';

import "./Home.css";
import { useHistory } from "react-router-dom";




const Home = () => {
  const history = useHistory();
  const {randomNumber, handAction} = useData();

  const handleCountinue = () => {
    console.log(' rand: ', randomNumber);
//(randomAction.randomNumber === 1 
    let number =0 ;
    if(number===1 ){
      history.push("/audio-instruction");
    } else {
      // number is 0 
      history.push("/word-instruction");
    }
    
  };


  return (
    <div className='container'>
      <h1>שלום לך, אנו שמחות שבחרת לקחת חלק בניסוי שלנו.</h1>
      <h3>
        הניסוי נערך כחלק מעבודת התואר שלנו בחוג לקלינאות תקשורת במכללת אחווה.
        בניסוי שלפניך יש 2 חלקים, לפני כל חלק יופיעו הוראות ברורות.
      </h3>
      <h4>במידה ויש שאלות מכל סוג שהוא ניתן לפנות אלינו בטלפון</h4>
      <div className ='containerContect'>
        <li>0549155905- שחף</li>
        <li>0506877588- שלי</li>
        <li>0503440042- נופר</li>
      </div>

      <div className ='containerButton'>
        <button onClick={handleCountinue}>המשך</button>
      </div>
    </div>
  );
};

export default Home;
