// import React, { useState } from 'react'

// const ChangeObjectName = () => {
//     const[name,setName] = useState({
//         username:'imran',
//         email:"imran@gmail.com",
//         age:"34"
//     })
// const [input,setInput] = useState('')

// const handleChange =()=>{
//     setName((prev)=>({...prev, username: input}))
// }
//   return (
//     <div>
//         <h1>Change Object Name</h1>
//         <h2>{name.username}</h2>
//         <input type="text" className="" placeholder='change name' onChange={(e)=> setInput(e.target.value)} />
//         <button onClick={handleChange}>change</button>
//     </div>
//   )
// }

// export default ChangeObjectName

// change multipale object value

import React, { useState } from 'react'

const ChangeObjectName = () => {
    const [name, setName] = useState({
        username: 'imran',
        email: "imran@gmail.com",
        age: "34",
        company: "GL",
        city: "gondia"
    })
    const [input, setInput] = useState('')

    const handleChange = () => {
        setName((prev) => ({ ...prev, [input.name]: input.value }));
      };
    
      const handleInput = (e) => {
        setInput({ name: e.target.name, value: e.target.value });
      };
    return (
        <div>
            <h1>Change Object Name</h1>
            <h2>{name.username}</h2>
            <input type="text" className="" placeholder='change name' name='username' onChange={handleInput} />
            <h2>{name.email}</h2>

            <input type="text" className="" placeholder='change name' name='email' onChange={handleInput} />
            <h2>{name.age}</h2>

            <input type="text" className="" placeholder='change name' name="age" onChange={handleInput} />
            <h2>{name.company}</h2>

            <input type="text" className="" placeholder='change name' name="company" onChange={handleInput} />
            <h2>{name.city}</h2>

            <input type="text" className="" placeholder='change name' name="city" onChange={handleInput} />
<br></br>
            <button onClick={handleChange}>change</button>
        </div>
    )
}

