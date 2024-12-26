import React,{memo} from 'react'

const ChildComp = ({increment,setIncrementFunc}) => {
    console.log("its child componsanat")
  return (
    <div>
        <h1>ChildComp</h1>
        <div>{increment}</div>
        <button onClick={setIncrementFunc}>add</button>
        {/* <button onClick={()=>setIncrement(increment + 1)}>add</button> */}
    </div>
  )
}

export default memo(ChildComp)