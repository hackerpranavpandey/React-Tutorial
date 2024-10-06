import { useState } from 'react'
import './App.css'

// so here we are trying to understand hooks in JS
// so the problem comes in the update of UI
// so there is special method known as hooks
// so using them only we can update the values
function App() {

  // let counter = 5 // so it can be updated but cannot reflect in UI
  
  let [counter, setVertika ] = useState(5);

  const addValue = () => {
    // console.log("value added",Math.random())
    // console.log("value added",counter)
    // counter++;
    // setVertika(counter+1)
    // setVertika(counter+1)
    // setVertika(counter+1)
    // setVertika(counter+1)
    setVertika(prevCounter => prevCounter+1)
    setVertika(prevCounter => prevCounter+1)
    setVertika(prevCounter => prevCounter+1)
    setVertika(prevCounter => prevCounter+1)
  }

  const reduceValue = () => {
    // console.log("value reduced",Math.random())
    // console.log("value reduced",counter)
    // counter--;
    setVertika(prevCounter => prevCounter-4)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2> counter value : {counter} </h2>
      <button onClick={addValue}> add value </button>
      <br></br>
      <button onClick={reduceValue}> remove value </button>
    </>
  )
}

export default App