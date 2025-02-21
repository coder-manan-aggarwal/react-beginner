import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'
import React from 'react'
function App() {
  const [length, setlength] = useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [characterallowed,setcharacterallowed]=useState(false)
  const [password,setpassword]=useState("")

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwqyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberallowed)str+="123456789"
    if(characterallowed)str+="!@#$%^&*(){}<>?"
    for(let i=0;i<length;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass+=str[index];
    }
    setpassword(pass)
  },[length,numberallowed,characterallowed,setpassword])
  useEffect(()=>{
    passwordgenerator()
  },[length,numberallowed,characterallowed,passwordgenerator])
  //useRef hook
   
  const passwordref=useRef(null);
  const copytoclipboard=useCallback(()=> {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordref}
      />
      <button
      onClick={copytoclipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
      
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
       className='cursor-pointer'
       onChange={(e) => {setlength(e.target.value)}}
        />
        <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={numberallowed}
        id="numberInput"
        onChange={() => {
            setnumberallowed((prev) => !prev);
        }}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={characterallowed}
            id="characterInput"
            onChange={() => {
                setcharacterallowed((prev) => !prev )
            }}
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
  )
}

export default App
