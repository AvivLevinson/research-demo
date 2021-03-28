import React from 'react';

import {useHistory} from 'react-router-dom';


const Home = ()=>{
  const history = useHistory();

  const handleCountinue = ()=>{
    history.push('/instruction');

  }

  const handleBack = ()=>{
    
  }

  return (
    <div> 
      <h1>homse page</h1>

      
      
      <div>
      <button onClick ={handleCountinue}>continue</button>  
      <button onClick ={handleBack}>back</button>  
      </div>      
    </div>
  );
}

export default Home;