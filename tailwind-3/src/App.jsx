import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

let myObj = {
  name:'X',
  age: 2,
  address:{
    city:'unknown',
    state:'unknown',
    country:'unknown'
  }
};

let newArr = [1,2,3,4,5,6]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite Demo</h1>
      <Card myArr = {newArr} />
      <Card username="CBS" />
      <Card username="JKLW" post="No 1 Programmer" />
      <Card username="Norton" post="Security" />
    </>
  )
}

export default App
