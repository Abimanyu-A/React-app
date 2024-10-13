import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("cyan")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style = {{backgroundColor: color}}>
        <div className='fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button className='outline-none px-4 rounded-full text-white shadow-large'
            onClick={() => setColor("red")} // its prefered to use a callback function within onclick
            style={{backgroundColor: "red"}}>Red</button>
            <button className='outline-none px-4 rounded-full text-white shadow-large'
            onClick={() => setColor("green")}
            style={{backgroundColor: "green"}}>Green</button>
            <button className='outline-none px-4 rounded-full text-white shadow-large'
            onClick={() => setColor("blue")}
            style={{backgroundColor: "blue"}}>Blue</button>
            <button className='outline-none px-4 rounded-full text-white shadow-large'
            onClick={() => setColor("olive")}
            style={{backgroundColor: "olive"}}>Olive</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
