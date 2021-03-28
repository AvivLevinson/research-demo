import React from 'react';
import {useHistory} from 'react-router-dom';


const Instructions = ()=>{
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
      
      <h3>
      במקביל, אנו מבקשות כחלק מהניסוי, להחזיק ביד החופשית שלך חפץ מעל השולחן/ מתחת לשולחן (בהתאם לחלוקת הנבדק לקבוצות) לאורך כל הניסוי. כל חפץ שיש בסביבתך ולא יכביד על החזקתו מתקבל.
את/ה מתבקש/ת לענות במהירות ובמדויק ככל הניתן 

      </h3>

      <div className="containerButton">
      <button onClick ={handleCountinue}>לחץ להמשך</button>  
      <button onClick ={handleBack}>חזור אחורה</button>  
      </div>      
    </div>
  );
}

export default Instructions;