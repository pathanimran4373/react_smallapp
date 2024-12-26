import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = () => {
    const navigate = useNavigate()
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        // get data from local storage by key name
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('_name'));
        setAge(localStorage.getItem('_age'));
        setEmail(localStorage.getItem('_email'));

    }, [])

    // update data
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://657f21799d10ccb465d60542.mockapi.io/crud/${id}`, {
            // put data in previous key
            _name: name,
            _age: age,
            _email: email
        }).then(() => {
            navigate('/')
        });
    }
    return (
        <div>
            <h1>Update</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>name</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

                    <label>age</label>
                    <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />

                    <label>email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type='submit'>create</button>
                </form>
            </div>
        </div>
    )
}

export default Update