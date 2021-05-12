import React from 'react';
import {useHistory} from 'react-router-dom';

import './AudioInstructions.css'

const AudioInstructions = ()=>{
  const history = useHistory();

  const handleCountinue = ()=>{
    history.push('/example-audio');

  }

  const handleBack = ()=>{
    history.goBack();
  }

  return (
    <div className = "container"> 
      <h1>בניסוי הזה יושמעו מילים אשר נאמרות על ידי שני דוברים שונים</h1>
      <h1>המטלה שלך היא לזהות מי מבין הדוברים אמר את המילה</h1>
      
      <h3>
      כדי לקבוע מיהו הדובר ששמעת, נא ללחוץ על המקשים ימינה ושמאלה בשביל דובר א' ודובר ב' בהתאמה.  
 את/ה מתבקש/ת לענות במהירות ובמדויק ככל הניתן
 נתחיל עם הדגמה,
      </h3>

      <div className="containerButton">
      <button onClick ={handleCountinue}>לחץ להמשך</button>  
      <button onClick ={handleBack}>חזור אחורה</button>  
      </div>      
    </div>
  );
}

export default AudioInstructions;