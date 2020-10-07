import React, {useState} from 'react';
import Tweet from "./tweet"

function App(){
  const [isRed,setRed]=useState(false);
  const [count,setCount]=useState(0);
  

  const Increment =() =>{
    setCount(count+1);
  }


  return(
    <div className="app">
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>
   
      <Tweet name="DEv" message="Hello Puru"/>
      <Tweet name="Joe" message="Hello World"/>
      <Tweet name="Jaes"/>
    </div>
  );

  }

export default App;
