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
    <div> 
      <h1>Instructions page</h1>

      
      
      <div>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default Instructions;