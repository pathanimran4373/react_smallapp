import React, { useState, useEffect } from 'react'

const SearchFilter = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setError] = useState(false)
    const [isInput, setInput] = useState('')
    // cheak unnecesary re-rendring
    console.log('SearchFilter file is exist')


    useEffect(() => {
        const apiFunction = async () => {
            try {
                setLoading(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const resData = await response.json();
                // console.log(resData)

                setData(resData);
                setLoading(false)
                setError(false)
            } catch (error) {
                console.error("error")
                setError(true)
                setLoading(false)

            }
        }
        apiFunction()
    }, []);

    const filterFunction = data.filter((index) => {
        return (
            index.name.toLowerCase().includes(isInput.toLowerCase())
        )
    }


    )
    return (
        <div>
            <h1> Search Filter</h1>
            {/* <div className="">
                {
                    loading ? <h1>Loading....</h1> : data.map((item) => (
                        <ul key={item.id}>
                            <li className="">{item.name}</li>
                            <li className="">{item.email}</li>
                            <li className="">{item.phone}</li>
                         </ul>
                    ))
                }
            </div> */}
            <div className="">
                <input type='text' placeholder='enter name' onChange={(e) => setInput(e.target.value)} />
            </div>
            <div>
                <div className="">
                    {loading ? (
                        <h1>Loading..............</h1>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterFunction.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td>{user.company.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <div>{isError && <h3>Sorry, data is not found, try again later</h3>}</div>
        </div>
    )
}

export default SearchFilter