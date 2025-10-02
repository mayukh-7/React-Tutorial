import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Mayukh Maity",
    age:20,
    address: {
      city: "kolkata",
      state: "West Bengal",
      country: "India"
    }
  }
  let newArr = [1,2,3,5,6,7]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Mayukh" myArr = {newArr}/>
      <Card />
      <Card />
    </>
  )
}

export default App
