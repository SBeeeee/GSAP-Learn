import React, { useRef,useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  
  const boxRef=useRef();
  const {contextSafe}=useGSAP();
  const rotatebox=contextSafe(function(){
    gsap.to(boxRef.current,{
      x:860,
      duration:1
    })
  })
 
  return (
    <main>
    <button onClick={rotatebox} >Animate</button>
    <div ref={boxRef} className="circle"></div>
    </main>
  )
}

export default App
