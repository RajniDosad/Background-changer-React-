import { useState } from 'react'
function App() {
  const[color,setColor]=useState("olive")
  return(
    <>
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button  onClick={()=> setColor("red")} className="ouline-none px-4  py-1 rounded-full shadow-lg"
        style={{backgroundColor:"red"}}  >
          Red
        </button>

        <button  onClick={()=> setColor("pink")} className="ouline-none px-4  py-1 rounded-full shadow-lg"
        style={{backgroundColor:"pink"}}  >
          Pink
        </button>

        <button  onClick={()=> setColor("green")} className="ouline-none px-4  py-1 rounded-full shadow-lg"
        style={{backgroundColor:"green"}}  >
          Green
        </button>

        <button  onClick={()=> setColor("purple")} className="ouline-none px-4  py-1 rounded-full shadow-lg"
        style={{backgroundColor:"purple"}}  >
          Purple
        </button>

        <button  onClick={()=> setColor("grey")} className="ouline-none px-4  py-1 rounded-full shadow-lg"
        style={{backgroundColor:"grey"}}  >
          Grey
        </button>

        <button  onClick={()=> setColor("yellow")} className="ouline-none px-4  py-1 rounded-full shadow-lg"
        style={{backgroundColor:"yellow"}}  >
          Yellow
        </button>

        <button onClick={()=> setColor("blue")} className="ouline-none px-4  py-1 rounded-full shadow-lg"
        style={{backgroundColor:"blue"}}  >
          Blue
        </button>
       </div>
      </div>
    </div>
    </>
  );
}


export default App
