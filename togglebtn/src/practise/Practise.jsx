import React, { useState } from 'react'

const Practise = () => {
    
    const [show, setShow] = useState(false)
    const msg = "age less than 25"

    let handleCheak = (e) => {
        const val = e.target.value
        setShow(false)
        if (val < 25) {
            setShow(true)
        }
    }
    return (
        <div>
            <input type='number' onChange={ handleCheak} />
            <div>
                msg:{
                    show ? msg : null
                }
            </div>

        </div>
    )
}

export default Practise