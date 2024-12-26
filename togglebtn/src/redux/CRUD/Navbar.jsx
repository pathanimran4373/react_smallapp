import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <header className='header-container'>
                <div className='left-container'>
                    <Link to="/"><p>Create post</p></Link>
                    <Link to="/read"><p>Read post</p></Link>

                </div>
                <div className='search-container'>
                    <input />
                </div>
            </header>
        </>
    )
}

export default Navbar