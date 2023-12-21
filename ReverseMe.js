
import react, {useState} from 'react'

const ReverseMe=()=> {

   const [bValue, setbValue] = useState ();
   
   const a = [...bValue]

    const HelloDear =()=> {
   
      return a.reverse ();
        
    }
    





return (

<div>

<input  onChange={(e)=>setbValue(e.target.value)}></input>







<h1>{HelloDear()}</h1>

</div>



)


}
export default ReverseMe;