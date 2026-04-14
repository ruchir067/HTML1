import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function App(){
   const[data,setdata]=useState("hello");
   function fun(){
      setdata("Changed Value")
   }
   return (
      <>
      <h1>State of variable</h1>
      <h2>{data}</h2>
      <button onClick={fun}>click</button>
      
      </>
   )
  }
export default App
