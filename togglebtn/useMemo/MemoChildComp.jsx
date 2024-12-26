import React from 'react'

const MemoChildComp = ({handleSecondIncrement,incre}) => {
  return (
    <div>
      <h1 className="">MemoChildComp</h1>
      <div className="">{incre}</div>
      <button onClick={handleSecondIncrement}> second increment</button>
    </div>
  )
}

export default MemoChildComp