import React,{useState, useContext, useEffect} from 'react';


const DataContext = React.createContext();

export const DataProvider = ({children, randomAction})=>{




  return(
    <DataContext.Provider value={{randomAction}}>
    {children}

    </DataContext.Provider>
  );




}


export const useData = ()=> useContext(DataContext);