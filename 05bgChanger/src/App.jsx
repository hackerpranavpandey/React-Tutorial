import { useState } from 'react'
import './App.css'

// directly variables can be used here

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className="justify-center bottom-12 flex flex-wrap inset-x-0" style={{backgroundColor:"blue",fontSize:"200%"}}>
        <h1> Welcome to Background changer </h1>
      </div>
      <br></br>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{backgroundColor:"red"}}
              onClick={()=>setColor("red")}> Red </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{backgroundColor:"green"}}
              onClick={()=>setColor("green")}> Green </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{backgroundColor:"blue"}}
              onClick={()=>setColor("blue")}> Blue </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{backgroundColor:"purple"}}
              onClick={()=>setColor("purple")}> Purple </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{backgroundColor:"pink"}}
              onClick={()=>setColor("pink")}> Pink </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{backgroundColor:"olive"}}
              onClick={()=>setColor("olive")}> Olive </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{backgroundColor:"Black",color:"white"}}
              onClick={()=>setColor("#424242")}> Black </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App