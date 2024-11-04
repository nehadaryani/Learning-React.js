import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import {jsx as _jsx} from "react/jsx-runtime.js"


function MyApp(){
   return(
    <div>
      <h1>Custom App!! || Chai and React</h1>
    </div>
   )
}
/*const reactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit google '

}*/

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google....</a>
)

const anotheruser="Chai and React"

const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'},
    'Click me to visit Google.... ',
    anotheruser
  
)
ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
)


    
  

