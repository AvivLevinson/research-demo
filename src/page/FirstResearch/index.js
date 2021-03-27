import React from 'react';
import {useHistory} from 'react-router-dom';


const FirstResearch = ()=>{
  const history = useHistory();

  const handleCountinue = ()=>{
    //history.push('/exapmle-word');

  }

  const handleBack = ()=>{
    history.goBack();
  }

  return (
    <div> 
      <h1>FirstResearch page</h1>

      
      
      <div>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default FirstResearch;