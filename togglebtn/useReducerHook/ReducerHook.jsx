
// import React, { useState } from 'react'


// const ReducerHook = () => {
// const [loading, setLoading] = useState(false);
// const [data, setData] = useState([])
// const [ error, setError] = useState(false)

// const handleClick = async()=>{
//     try {
//         setLoading(true)
//         setError(false)
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const resData = await res.json()
//         setData(resData)
//         setLoading(false);
//     } catch (error) {
//         setError(true);
//         setLoading(false)
//     }
// }
//   return (
//     <div><h1>ReducerHook</h1>
// <button onClick={handleClick}>{loading ? "Wait...." : "click"}</button>
//  <div>{data.map((item)=>(
//     <h3 key={item.id}>{item.username}</h3>
// ))}
// </div> 

// <p>{error && 'sorry data not found'}</p>
//     </div>
//   )
// }

// export default ReducerHook

// by using reducer hook....................................................

import { useReducer } from "react"
import {INITIAL_STATE,dataReducer} from "./Reducer"

const ReducerHook = () => {
    const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE);
  
    const handleClick = async () => {
      try {
        dispatch({ type: "START_FETCHING" });
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const resData = await response.json();
        dispatch({ type: "FETCHING_SUCCESS", payload: resData });
      } catch (error) {
        dispatch({ type: "FETCHING_ERROR" });
      }
    };
  
    const { loading, data, error } = state;
  
    return (
      <>
        <button onClick={handleClick}>{loading ? "Loading" : "Click"}</button>
        <div>{data.map((item) => (<h1 key={item.id}>{item.username}</h1>))}</div>
        <p>{error && 'Sorry, data not found'}</p>
      </>
    );
  };
  
  export default ReducerHook;