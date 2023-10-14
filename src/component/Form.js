
import React,{useState} from "react";


const Form=()=>{
    const [name,setName]=useState("")
    function updateName(event){
        console.log(event.target.value)
        setName(event.target.value)
    }
    return(
        <div>
            <h1>form</h1>
            <input  type="text" placeholder="Name" onChange={updateName}/>
            <p>the name of user is {name}</p>
        </div>
    )
}
export default Form