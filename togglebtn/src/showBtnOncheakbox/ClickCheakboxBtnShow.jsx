import React, { useState } from 'react'

const myData = [{ id: 1, name: "imran", city: "gondia" }, { id: 2, name: "fra", city: "nagpur" }, { id: 3, name: "altaf", city: "pune" }]

const ClickCheakboxBtnShow = () => {
    const [data, setData] = useState(myData)
    const [show, setShow] = useState({})

    const handleDelet = (index) => {
        const newObj = [...data]
        let newdata = newObj.filter((val, i) => {
            return i !== index;
        })
        setData(newdata)
    }

    const handleShow = (index) => {
        const newCheakval = { ...show };
        newCheakval[index] =   !show[index];
        setShow(newCheakval)

    }

    return (
        <div>
            {
                data.map((val, index) => {
                    return (
                        <>
                            <input type="checkbox" checked={show[index]} onChange={() => { handleShow(index) }} />
                            <span key={index}>{val.name}{val.city}</span>
                            <div>{show[index] && <button onClick={() => handleDelet(index)}>delete</button>
                            }</div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ClickCheakboxBtnShow