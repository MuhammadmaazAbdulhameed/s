import React from 'react'
import { useState } from 'react'
const Stopwatch = () => {

    const[time, setTime] = useState({hr:0 , min:0, sec:0, milSec:0  })
    const [status, setStatus] = useState()

let updHr = time.hr 
let updMin = time.min
let updSec = time.sec
let updMilSec = time.milSec


const start = () =>{
    myFun()
    setStatus(setInterval(myFun, 10))

}    

const stop = () =>{
    clearInterval(status)
}

const reset = () =>{
    clearInterval(status)
    setTime ({hr:0 , min:0, sec:0, milSec:0 })

}

const myFun = () =>{
    if(updMilSec === 100 ){
        updMilSec = 0;
        updSec ++ 
    }
    if(updSec === 60){
        updSec = 0 
        updMin ++ 
    }
    updMilSec++
    if(updMin === 60){
        updMin = 0
        updHr ++
    }
return setTime({hr:updHr, min:updMin, sec:updSec, milSec:updMilSec})
}


  return (
    <>
    
    <div className='container'>
        <h1> 
            {time.hr + ":" + time.min + ":" + time.sec + ":" + time.milSec} 
        </h1>
        <div className="buttons">
        <button className='start' onClick={start} >Start</button>
        <button className='stop'  onClick={stop} >Stop</button>
        <button className='reset' onClick={reset}  >Reset</button>
        </div>
    </div>
    </>
  )
}

export default Stopwatch