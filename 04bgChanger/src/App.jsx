
import { useState } from "react"
function App() {
 const [color, setcolor] = useState("plum")

  return (
  
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}
    >
      <h1 className="text-3xl font-bold underline flex items-center justify-center h-screen">Color Changing Website</h1>
       <div className="fixed flex flex-wrap 
       justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center gap-3
        shadow-lg bg-gray-800 px-3 py-2 rounded-2xl">
        <button onClick={()=>setcolor("Red")}
        className="outline-none px-4 py-1 rounded-full 
         text-white shadow-lg" style={{backgroundColor:"red"}}>RED</button>
        
        <button onClick={()=>setcolor("maroon")}
         className="outline-none px-4 py-1 rounded-full 
         text-white shadow-lg" style={{backgroundColor:"maroon"}}>MAROON</button>
        
        <button onClick={()=>setcolor("blue")}
        className="outline-none px-4 py-1 rounded-full 
         text-white shadow-lg" style={{backgroundColor:"Blue"}}>BLUE</button>
        
        <button onClick={()=>setcolor("orange")}
        className="outline-none px-4 py-1 rounded-full 
         text-white shadow-lg" style={{backgroundColor:"Orange"}}>ORANGE</button>
        
        <button onClick={()=>setcolor("indigo")}
        className="outline-none px-4 py-1 rounded-full 
         text-white shadow-lg" style={{backgroundColor:"indigo"}}>INDIGO</button>
        
        
        </div>

       </div>
    </div>
  )
}

export default App
