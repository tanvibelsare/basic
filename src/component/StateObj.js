import React,{useState }from "react";

const StateObj=()=>{
   const [coins,setCoins]=useState({Gold:0,Silver:0,Bronze:0})
   function increaseGold(){
    // we use spread operator becoz maitain the obj other value is necessary if not maintain this the whole coin replace by only one coin 
         setCoins({...coins,Gold:coins.Gold+1})
   }

    return(
        <div>
           <p>Gold:{coins.Gold}|Silver:{coins.Silver}|Bronz:{coins.Bronze}</p>
           <button onClick={increaseGold}>Gold</button>
           <button onClick={()=>setCoins({...coins, Silver:coins.Silver+1})}>Silver</button>
           <button onClick={()=>setCoins({...coins, Bronze:coins.Bronze+1})}>Bronze</button>
        </div>
    )
}

export default StateObj;