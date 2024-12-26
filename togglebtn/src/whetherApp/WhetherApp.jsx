import React, { useState } from 'react'
import "./WhApp.css"
import Api from './Api'

const WhetherApp = () => {
    // get input from user
    const [name, setName] = useState("")
    //    get api data
    const [whether, setWhether] = useState({})
    //    function to get data on serch btn
    const handleSearch = async (city) => {
        const getApiCall = await Api(city);
        setWhether(getApiCall)
        setName("")
    }
    console.log(whether)
    return (
        <div className='whether-page'>
            {whether && whether.weather && <div className="app-container">
                <h1>Whether App</h1>
                <div className='input-box'>
                    <input type='text' placeholder='enter city' value={name} onChange={(e) => setName(e.target.value)} />
                    <button onClick={() => handleSearch('city')}>Search</button>
                </div>
                <div className='show-whether-container'>
                    <div className="city-box">
                        <h2>{weather.name}</h2>
                        <Date></Date>
                    </div>
                    <div className="image-box">
                        <img src="" alt="" />
                        <p>overcast claoud</p>
                    </div>
                    <div>
                        <span>wind is slow</span>
                    </div>
                </div>
            </div>
            }
            <div>
            {!whether.whether && <div>
                <h1>page not found</h1>
            </div>}
            </div>
            {JSON.stringify(whether)}
        </div>
    )
}

export default WhetherApp