import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  
  const boxRef=useRef();
  useGSAP(()=>{
    gsap.from(boxRef.current,{
      rotate:720,
      duration:2,
    })
  })
  return (
    <main>
     <div className="container">
   
     <div className="circle"></div>
     <div ref={boxRef} className="box"></div>
     </div>
     <div className="kuch">
      <div className="circle"></div>
      <div className="box"></div>
     </div>
    </main>
  )
}

export default App
