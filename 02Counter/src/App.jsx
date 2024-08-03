import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  const addValue = ()=>{
    if(counter<20){
      counter=counter+1;
      setCounter(counter)
      console.log("button clicked", counter);
    }
  }

  const delValue = ()=>{
    
    if(counter>0){
      counter=counter-1;
      setCounter(counter)
      console.log("button clicked", counter);
    }
      
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br /><br />
      <button onClick={delValue}>Remove value: {counter}</button>
    </>
  )
}

export default App
