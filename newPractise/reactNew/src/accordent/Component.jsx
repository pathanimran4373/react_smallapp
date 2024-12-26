import React, { useState } from 'react'

export const Component = ({ id, title, info }) => {
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow((t)=>!t)
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleShow}>{show ? "-" : "+"}</button>
            <div>{show && <p>{info}</p>}</div>
        </div>
    )
}
