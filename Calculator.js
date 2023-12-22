
import React, { useState } from "react";
import './Calculator.css'
function Calculator() {
    const[inArr, setinArr] = useState("");
    const[outArr, setinourArr] = useState("");
  
    const opt= ["-","+"];
   
   const ClickMe =(e)=> {

   
   
    setinArr ( inArr.concat(e.target.value))  } 


        const clearMe=()=>{
             setinArr("")  }

          const ansMe=()=>{
           setinArr(eval(inArr)) 
                                          }
return (
     <div className="outer-div">  

  <div >  <input  className="display"
    type="text" value={inArr}
    onChange={(e)=>setinArr(e.target.value)}>
    </input> <br></br> </div>

<div className="  calculator  ">  
<button className="number-Button" value={1} onClick={ClickMe}>1</button>
<button className="number-Button" value={2} onClick={ClickMe}>2</button>
<button className="number-Button" value={3} onClick={ClickMe}>3</button>
<button className="number-Button" value={4} onClick={ClickMe}>4</button>
<button className="number-Button" value={5} onClick={ClickMe}>5</button>
<button className="number-Button" value={6} onClick={ClickMe}>6</button>
<button className="number-Button" value={7} onClick={ClickMe}>7</button>
<button className="number-Button" value={8} onClick={ClickMe}>8</button>
<button className="number-Button" value={9} onClick={ClickMe}>9</button>
<button className="number-Button" value={0} onClick={ClickMe}>0</button> 
<button  className="number-Button"  value={"+"} onClick={ClickMe}>+</button>
<button  className="number-Button" value={"-"} onClick={ClickMe}>-</button>
<button  className="number-Button" value={"/"} onClick={ClickMe}>÷</button>
<button  className="number-Button" value={"*"} onClick={ClickMe}>*</button>
<button  className="number-Button" onClick={ansMe}>Ans</button>
<button  className="number-Button" onClick={clearMe}>Clear</button> </div>


   
   
   </div>
 
   


)
}
export default Calculator;
