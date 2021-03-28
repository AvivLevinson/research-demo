import React,{useEffect,useState,useRef} from 'react';
import './Counter.css';

const Counter = ({setVisibleCounter})=>{
  const [timer, setTimer] = useState(3);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
      setVisibleCounter((prev)=>!prev);
    }
  }, [timer]);

  return (
    <div className="container" >
      <div style={{fontSize:50}}> {timer} </div>
    </div>
  );
}

export default Counter 