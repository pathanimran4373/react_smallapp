import React from 'react'
import Carousal from "./carousal/Carousal"
import Data from "./carousal/Data"
const App = () => {
  return (
    <div>
      <Carousal data={Data}/>
    </div>
  )
}

export default App