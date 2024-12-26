import React,{useMemo, useState} from 'react'
import MemoChildComp from './MemoChildComp'


const MemoParentComp = () => {
  const [count,setCount] = useState(0)
const [incre, setIncre] = useState(0)
  const handleIncrement =()=>{
    console.log('first increment')
    setCount(count + 1)
  }
  const handleSecondIncrement =()=>{
    console.log('second increment')
    setIncre(incre + 1)
  }
  // const multiplay =()=>{
  //   console.log('multyplay')
  //   return count * 5;
  // }

  // by using useMemo
  const multiplay = useMemo(()=>{
    console.log('multiplication')
    return count * 5;
  },[count])
  return (
    <>
    <div>
      <h1>MemoParentComp</h1>
      <div className="">{count}</div>
      <div className="">multyplay{multiplay}</div>
      <button onClick={handleIncrement}>increse</button>
    </div>
    <MemoChildComp  handleSecondIncrement={ handleSecondIncrement} incre={incre}/>
    </>
  )
}

export default MemoParentComp