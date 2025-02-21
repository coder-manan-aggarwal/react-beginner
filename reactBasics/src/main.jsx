import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import React from 'react'
import App from './App.jsx'
function Myapp(){
  return (
    <div>
      <h1>Custom app !</h1>
    </div>
  )
}
 const anotheruser='abc'
// const ReactElement={
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'click me to visit google'
// }
const anotherElement=(
  <a href="https:// google.com" target='_blank'>Visit google</a>
)
const ReactElement=React.createElement(
  'a',
  {
    'href':'https://google.com',target:'_blank'},
  
  'click me to visit google',
  anotheruser
)
createRoot(document.getElementById('root')).render(
  // <Myapp/>
  // Myapp()
  // ReactElement
  // anotherElement
  ReactElement
  // <App/>
)
