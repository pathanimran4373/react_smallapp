import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <h1>Home</h1>
                <Link to='/about'> <h2>ABOUT</h2></Link>
                <Link to='/contact'> <h1>Contact</h1></Link>
               
            </div>
        </React.Fragment>

    )
}

export default Home