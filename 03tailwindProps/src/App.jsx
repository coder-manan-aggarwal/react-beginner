import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from 'components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"Manan Aggarwal",
    age: 20
  }
  let myarr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>
        Tailwind test
      </h1>
      <Card username="chai aur code"/>
      <Card username="manan aggarwal" btntext="click here"/>
    </>
  )
}

export default App
