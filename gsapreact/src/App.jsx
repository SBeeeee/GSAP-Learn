import React, { useRef,useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  
  const [circle,setCircle]=useState(60)
  const random=gsap.utils.random(-500,500,10)

  useGSAP(()=>{
    gsap.to(".circle",{
      x:circle,
      duration:0.5
    })
  },[circle])  //{scope:".container or boxRef" ,dependencies:[xValue,yValue]  //syntax to use both scope and dependencies scope defines the portion where the animation shld search for given classes or id to animate
  return (
    <main>
    <button onClick={()=>{setCircle(random)}} >Animate</button>
    <div className="circle"></div>
    </main>
  )
}

export default App
