import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const State = () => {
    // variable [variableName, setter Function ] = useState(initative)
const [count , setCount]=useState(0);
return(
    <div>
        <p>Count : {count}</p>
        <button onClick ={()=>{setCount(count+1)}}>Increment</button>
    </div>
)
}

export default State