import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function App()
{

function banana() 
{
   alert("You Click On Banana")
}
                   
  
 function apple()
 {
   alert("You Click On Apple")
 }
   return(
   <div>
<button onClick={apple}>Apple</button>
<button onClick={banana}>Banana</button>
</div>
   )

  }

export default App
