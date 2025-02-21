import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addvalue=()=>{
    
    counter++;
    if(counter>20)counter=20
    setCounter(counter)
  }
  const removeValue=()=>{
    counter--;
    if(counter<0)counter=0
    setCounter(counter)
  }
   //let counter=5--> changes are not reflected on UI for which we will use react hooks USESTATE
  return (
    <>

    <h1> chai aur react</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addvalue}>add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
