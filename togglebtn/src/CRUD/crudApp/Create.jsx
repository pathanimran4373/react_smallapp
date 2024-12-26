import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'

const Crud = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('https://657f21799d10ccb465d60542.mockapi.io/crud',{
            _name:name,
            _age:age,
            _email:email
        }).then(()=>{
            navigate("/")
        })
        
    }
    
    return (
        <div>
            <h1>Create</h1>
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
export default Crud