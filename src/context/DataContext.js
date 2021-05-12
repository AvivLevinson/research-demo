import React,{useState, useContext, useEffect} from 'react';


const DataContext = React.createContext();

export const DataProvider = ({children, randomAction})=>{
  const [researchData, setResearchData] = useState([]);

const setNewData = (data) =>{
  console.log(data);

  setResearchData((prev)=>{
    return [prev, data]; 
  })
};

  return(
    <DataContext.Provider value={
      randomAction,
      setNewData
    }>
    {children}

    </DataContext.Provider>
  );
}

export const useData = ()=> useContext(DataContext);