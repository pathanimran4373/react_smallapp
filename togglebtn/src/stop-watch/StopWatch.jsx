import React, { useRef, useState } from 'react'

const StopWatch = () => {

    const ref = useRef(null)
    const [state, setState] = useState(0)
    const [run, setRun] = useState(false)


    const handleStart = () => {
        if (!run) {
            setRun(true);
            ref.current = setInterval(() => {
                setState(prv => prv + 1);
            }, 1000)

        }

    }
    const handleStop = () => {
        clearInterval(ref.current)
        setRun(false)
    }
    const handleReset = () => {
        setState(0)
        clearInterval(ref.current)
        setRun(false)
    }


    return (
        <div>
            <h1>Stop Watch</h1>
            
            <h2>{state}</h2>
            <button onClick={handleStart}>
                start
            </button>
            <button onClick={handleStop}>
                stop
            </button>
            <button onClick={handleReset}>
                reset
            </button>
        </div>
    )
}

export default StopWatch