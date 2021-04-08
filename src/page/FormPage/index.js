import React from 'react';
import {useHistory} from 'react-router-dom';


const FormPage = ()=>{
  const history = useHistory();

  const handleCountinue = ()=>{
    //history.push('');

  }

  const handleBack = ()=>{
    history.goBack();
  }

  return (
    <div> 
      <h1>Form page </h1>

      
      
      <div>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default FormPage;