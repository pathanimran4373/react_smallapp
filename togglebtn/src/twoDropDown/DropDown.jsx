import React, { useState } from 'react'

const obj = [
    {
        id: 1, name: "imran", city: ["nagpur", " banglore", "chani"]
    },
    {
        id: 2, name: "fra", city: ["gondi", "ramnagar", "railtoli"]
    },
    {
        id: 3, name: "altaf", city: ['neagpur', "nasik", "pune"]
    }
]
const DropDown = () => {
    const [isName, setName] = useState(obj[0].name);
    const [isCity, setCity] = useState(obj[0].city[0])
    
    const handleName = (e) => {
        const name = e.target.value;
        setName(name)
        setCity(obj.find((val) => val.name === name).city[0])
    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }
    return (
        <div>
            <select value={isName} onChange={handleName}>
                {
                    obj.map((item, index) => {
                        return (
                            <option key={index.id} value={item.name}>{item.name}</option>
                        )
                    })
                }
            </select>
            <select value={isCity} onChange={handleCity}>
                {obj.find((word) => word.name === isName).city.map((cityName, index) => (
                    <option key={index} value={cityName} >{cityName}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown