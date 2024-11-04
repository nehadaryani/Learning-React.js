import { useState } from 'react' //hooks from from here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter]=useState(15) 
  //count is variable and setCount is the function
  //let counter=5
  const addValue=()=>{
    //console.log("Value Added",Math.random());
    //console.log("Clicked = ",counter);
    //counter=counter+1
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    /*if (counter < 20) {
      setCounter(counter + 1);
    } else {
      //console.log("Counter cannot exceed 20");
      alert("You cannot exceed the value above 20")
    }*/
  }
  const removeValue=()=>{
    //setCounter(counter-1)
    /*if (counter > 0) {
      setCounter(counter - 1);
    } else {
      //console.log("Counter cannot exceed 20");
      alert("Value cannot go below 0")
    }*/
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button><br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
