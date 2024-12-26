import React, { useState } from 'react'
import './create.css'
import {useDispatch } from 'react-redux'
// import createUser thunk function from Slice.jsx
import {createUser} from "../Slice"
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()
    // state for get input value
    const [users, setUser] = useState({});

    // dispatch function for get data of user
    const dispatch = useDispatch();

    // onchange function to get user input
    const handleOnchange = (e) => {
        setUser({ ...users, [e.target.name]: e.target.value })
    }
    // data submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch function get user data from user-state in createUser thunk function
        dispatch(createUser(users));
        navigate("/read")

    }
    return (
        <div>
            <h1>Create</h1>
            <div>
                <form className='form-container' onSubmit={handleSubmit}>
                    <label>name</label>
                    <input type='text' name='name' onChange={handleOnchange} />
                    <label>age</label>
                    <input type='number' name='age' onChange={handleOnchange} />
                    <label>email</label>
                    <input type='email' name='email' onChange={handleOnchange} />
                    <div>
                        <label>male</label>
                        <input type='radio' name='gender' value="male" onChange={handleOnchange} />
                        <label>femail</label>
                        <input type='radio' name='gender' value="femail" onChange={handleOnchange} />
                    </div>
                    <button type='submit'>CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Create