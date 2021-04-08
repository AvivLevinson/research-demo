import React from 'react';
import {useHistory} from 'react-router-dom';


const SecondResearch = ()=>{
  const history = useHistory();

  const handleCountinue = ()=>{
    history.push('/form');

  }

  const handleBack = ()=>{
    history.goBack();
  }

  return (
    <div> 
      <h1>Second Research page </h1>

      
      
      <div>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default SecondResearch;