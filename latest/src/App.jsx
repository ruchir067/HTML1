import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function App(){

function fun(){
   alert("you click on button")
}
const fruit=(name,AP,BN)=>{
    alert(name,AP,BN)
}
let data ="Demo"
function updata(){
   data = "Example"
   alert(data);
}


   return(
   <div>

<h1> example of arrow function</h1>
<button onClick={fun}> Click to call function </button>
<button onClick={()=>fruit("first Parameter")}> arrow fruit button </button>
<button onClick={()=>fruit("you click on apple")}> Apple </button>
<button onClick={()=>fruit("you click on banana")}> Banana </button>
<h2> {data} </h2>
<button onClick={updata}> click to change value </button>
</div>
   )

  }

export default App
