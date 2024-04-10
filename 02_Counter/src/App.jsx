import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(15);

  // let counter = 15;

  const addValue = () =>{
    // console.log("clicked",Math.random());
    // counter = counter + 1; 
    if(counter >= 20){
      setCounter(0);
    }else{setCounter(counter + 1);}
    
  }

  const removeValue = () =>{
    if(counter <= 0){
      setCounter(0);
    }else{setCounter(counter -1 );}
    
  }
  return (
    <>
      <h1>Cahi aur React</h1>
      <br/><br/>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/><br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
