import React, { useState } from 'react'

const crudOpration = () => {
    // for get data from inputs
    const [data, setData] = useState({ name: "", email: "" })
    // for store data of inputs
    const [store, setStore] = useState([])
    // for change update and create button
    const [change, setChange] = useState(false)
    // update value in previous data
    const [updateData, setUpdateData] = useState('')
    // get data by input fild
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    // for submit data by button
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("data",data)
        // if update data it change previous data other wise store data
        if (change) {
            const getUpdateData = store;
            Object.assign(getUpdateData[updateData], data)
            // store new value in state
            setStore([...getUpdateData])
            // change button
            setChange(true)
            // clear data from input fild
            setData({ name: "", email: "" })
        } else {
            // store data in state
            setStore([...store, data])
            // clear data from input fild
            setData({ name: "", email: "" })
        }
    }

    // for dlete opration
    const handleDelete = (index) => {
        const deleteVariable = store.filter((item, i) => i !== index);
        setStore(deleteVariable)
    }


    // for update data
    const handleUpdate = (index) => {
        const updateVariable = store[index];
        // show data in input fild
        setData({
            name: updateVariable.name, email: updateVariable.email
        })
        // change button
        setChange(true)
        // change previous data by getting index
        setUpdateData(index)
    }

    return (
        <div>
            <h1>Crud Opration</h1>
            <div>
                {/* get information from input fild form */}
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='name' value={data.name} onChange={handleChange} />
                    <label>Email</label>
                    <input type='text' name='email' placeholder='email' value={data.email} onChange={handleChange} />
                    <button type='submit'>{change ? "update" : "create"}</button>
                </form>
            </div>
            <div>
                {/* show data in table */}
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            store.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        <button onClick={() => handleUpdate(index)}>edit</button>
                                        <button onClick={() => handleDelete(index)}>delete</button>
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

export default crudOpration