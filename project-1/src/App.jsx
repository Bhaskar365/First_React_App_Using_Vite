import { useState } from 'react'
import './App.css'

function App() {

  // const[variable,function] = useState()
  const [counter, setCounter] = useState(15);
  // let counter = 15

  const addValue = () => {
    //batched method cannot be ignored , add previous values from previous state accordingly
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
   
    // same method with one operation called many times in batching state becuase value is same,
    //so batching willexecute and ignore others 

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  }

  const removeValue = () => {

    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    //setCounter(counter-1);
  };

  return (
    <>
      <h1>Header {counter} </h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add Button</button> {" "}
      <button onClick={removeValue}>Remove Button</button>
      <p>Footer : {counter} </p>
    </>
  )
}

export default App
