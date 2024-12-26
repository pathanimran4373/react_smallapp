import React, { useEffect, useState } from 'react'

const Debouncing = () => {

    const [value, setValue] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        const getApiData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const apiData = await res.json()
                console.log(apiData)
                setData(apiData)
            } catch (error) {
                console.error(error)
            }
        }
        const requireTime = setTimeout(getApiData, 10000)
        return () => clearTimeout(requireTime)
    }, [value])

    const filterdata = data.filter((word) => {
        return word.name.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <>
            <div>Debouncing</div>
            <input type='text' onChange={(e) => setValue(e.target.value)} />
            <div className="">
                {filterdata.map((item) => (
                    <ul className="" key={item.id}>
                        <li className="">{item.name}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default Debouncing