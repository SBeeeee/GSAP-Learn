import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  
const gsapref=useRef () 
useGSAP(()=>{
  gsap.to(gsapref.current,{
    x:600,
    duration:2,
    delay:1,
    rotate:720
  })
})
  return (
    <main>
      <div ref={gsapref} className="box">

      </div>
    </main>
  )
}

export default App
