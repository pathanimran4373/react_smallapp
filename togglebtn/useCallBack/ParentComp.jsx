import React, { useCallback, useState} from 'react'
import ChildComp from './ChildComp'


const ParentComp = () => {

    const [count, setCount] = useState(0)
    const [increment, setIncrement] = useState(0)

    console.log('its parent componanant')

// child componanat function without useCallBack function
// const setIncrementFunc = ()=>{
//     setIncrement((inc)=>inc+1)
// }

// with callBack function
// its function for child componanant its run when increment state is update
const setIncrementFunc = useCallback(()=>{
    setIncrement((inc)=>inc+1)
},[increment])

  return (
    <>
    <div>
        <h1>ParentComp</h1>
        <div>{count}</div>
        <button onClick={()=> setCount(count + 1)}>increment</button>
    </div>
    <ChildComp increment={increment}
     setIncrementFunc={setIncrementFunc}
    // setIncrement={setIncrement}
     />
    </>
  )
  
}

export default ParentComp