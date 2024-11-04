import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Neha",
    age:21
  }
  let newArr=[1,2,3,4,5]
  return (
    <>
      <h1 className='bg-red-400 text-yellow-400 p-5 rounded-2xl mb-5'>Tailwind Session....</h1>
     <Card channel="chaiaurcode" btntext="click me" someObject={newArr} />
      <Card channel="Neha Daryani" btntext="click me"/>

      
    </>
  )
}

export default App
