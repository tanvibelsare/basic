import React,{useState} from "react";
  

const Counter=()=>{
    const [count,setCount]=useState(0);
     
    function increaseCount(){
        setCount(count+1)
    }

    return(
        <div>
            <h1>counter App</h1>
            {/* the value of count is changing  so we count as usestate variable */}
            <p>the value of count is {count}</p>
            <button onClick={increaseCount}>+</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )

}

export default Counter