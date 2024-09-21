import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)  //counter is like let counter = 15
  
  const addValue = () => {
   // console.log("clicked", counter);
    // counter = counter+1
    if(counter<20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Learning Hook's</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value:{counter}</button><br/><br/>
      <button onClick={removeValue}>delete Value:{counter}</button>
    </>
  )
}

export default App
