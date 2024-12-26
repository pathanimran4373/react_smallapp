// third code
import React, { useEffect, useState } from 'react';

const ContextBox = () => {
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState(null); // Initialize with null

    const apiFunction = async () => {
        try {
            const response = await fetch(`https://random-data-api.com/api/v2/addresses?size=${counter}`);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('error', error);
        }
    };

    useEffect(() => {
        apiFunction();
    }, [counter]);

    const handleCounter = () => {
        setCounter((i) => i + 1);
    };

    return (
        <div>
            <button onClick={handleCounter}>click</button>
            <span>{counter}</span>
            <div>
                {console.log(user)}
                {user && user.map((item, id) => (
                    <div key={id}>
                        <div className="name">{item.city}</div>
                        <div className="name">{item.country}</div>
                        <div className="name">{item.community}</div>
                        <div className="name">{item.full_address}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContextBox;


// import React, { useEffect, useState } from 'react'

// const ContextBox = () => {
//     const [counter, setCounter] = useState(0)
//     const [user, setUser] = useState([])

//     const apiFunction = async () => {
//         try {
//             const response = await fetch(`https://random-data-api.com/api/v2/addresses?size={counter}`)
//             const data = await response.json();
//             // console.log(data)
//             setUser(data)
//         } catch (error) {
//             console.error('error')
//         }
//         // const response = await fetch(`https://random-data-api.com/address/random_address?size={counter}`)
       
//     }
//     useEffect(() => {
//         apiFunction()
//     }, [counter])

//     const handleCounter = () => {
//         setCounter((i) => i + 1)
//     }
//     return (
//         <div>
//             <button onClick={handleCounter}>click</button><span>{counter}</span>
//             <div>
//                 {/* {console.log(user)} */}
//                 {
                    
//                    user.map((item)=>{
//                     console.log(item)
//                         return(
//                             <div key={id}>
//                                 <div className="name">{city}</div>
//                                 <div className="name">{country}</div>
//                                 <div className="name">{community}</div>
//                                 <div className="name">{full_address}</div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default ContextBox
// import React, { useEffect, useState } from 'react';

// const ContextBox = () => {
//     const [counter, setCounter] = useState(0);
//     const [user, setUser] = useState([]);

//     const apiFunction = async () => {
//         try {
//             const response = await fetch(`https://random-data-api.com/api/v2/addresses?size=${counter}`);
//             const data = await response.json();
//             setUser(data);
//         } catch (error) {
//             console.error('error', error);
//         }
//     };

//     useEffect(() => {
//         apiFunction();
//     }, [counter]);

//     const handleCounter = () => {
//         setCounter((i) => i + 1);
//     };

//     return (
//         <div>
//             <button onClick={handleCounter}>click</button>
//             <span>{counter}</span>
//             <div>
//                 {console.log(user)}
//                 {user.map((item, id) => (
//                     <div key={id}>
//                         <div className="name">{item.city}</div>
//                         <div className="name">{item.country}</div>
//                         <div className="name">{item.community}</div>
//                         <div className="name">{item.full_address}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ContextBox;


