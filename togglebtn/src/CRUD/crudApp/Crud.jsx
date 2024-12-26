import React from 'react'
import Create from "./Create"
import Read from './Read'
import Update from "./Update"
const Crud = () => {
  return (
    <div>
        <h1> CRUD opration</h1>
      <Create/>
      <Read/>
      <Update/>
    </div>
  )
}

export default Crud