import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const Read = () => {

    const [data, setData] = useState([]);

    const navigate = useNavigate()

    const apiFunction = async () => {
        try {
            const res = await axios('https://657f21799d10ccb465d60542.mockapi.io/crud');
            const resData = res.data;
            // console.log(res)
            setData(resData);
        } catch (error) {
            console.error("error")
        }
    }

    useEffect(() => {
        apiFunction()
    }, []);

    // for delete opration
    const handleDelete = async (index) => {
        await axios.delete(`https://657f21799d10ccb465d60542.mockapi.io/crud/${index}`)
            .then(() => {
                // call api function again
                apiFunction();
            })
    }

    // for edit
    const handleEdit = (id, name, age, email) => {
        // store data on local storage to display in input fild
        localStorage.setItem('id', id)
        localStorage.setItem('_name', name)
        localStorage.setItem('_age', age)
        localStorage.setItem('_email', email)
    }
    return (
        <div>
            <h1> Read</h1>
            <button onClick={() => navigate('/create')}>Create</button>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>email</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (

                                <tr key={item.id}>
                                    <td>{item._name}</td>
                                    <td>{item._age}</td>
                                    <td>{item._email}</td>
                                    <td>
                                        <Link to='/update'> <button onClick={() => handleEdit(item.id, item._name, item._age, item._email)}>edit</button></Link>
                                        <button onClick={() => {
                                            if (window.confirm('are you sore')) {
                                                handleDelete(item.id)
                                            }
                                        }
                                        }
                                        >delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Read