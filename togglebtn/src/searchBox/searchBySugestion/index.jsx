// import React, { useEffect, useState } from 'react';

// const FilterBySugestion = () => {
//     const [value, setValue] = useState('');
//     const [data, setData] = useState([]);
//     const [show, setShow] = useState(false);


// // call api  by using debouncing

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await fetch('https://jsonplaceholder.typicode.com/users');
//                 const apiData = await res.json();
//                 setData(apiData);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         const fetchTimeout = setTimeout(fetchData, 7000);

//         return () => clearTimeout(fetchTimeout);
//     }, [value]);

//     const getInpute = (event) => {
//         setValue(event.target.value);
//     };

//     const handleClick = (itemName) => {
//         setValue(itemName);
//     };

//     const filteredData = value
//         ? data
//               .filter((word) => word.name.toLowerCase().includes(value.toLowerCase()))
//               .slice(0, 5)
//         : [];

//     return (
//         <div>
//             <h1>FilterBySugestion</h1>
//             <input type='text' value={value} onChange={getInpute} />
//             <div>
//                 {filteredData.map((item) => (
//                     <ul onClick={() => handleClick(item.name)} key={item.id}>
//                         <li>{item.name}</li>
//                     </ul>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FilterBySugestion;

// it is third method
import React, { useEffect, useState } from 'react'
// filter with suggession
const FilterBySugestion = () => {

    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)

    // cheak unnecesary re-rendring
    console.log('search by Suggestion file is exist')


    useEffect(() => {

        const getApiData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const apiData = await res.json()
                console.log(apiData)
                setData(apiData)
            } catch (error) {
                console.error(error)
            }
        }
        const getTimeApi = setTimeout(getApiData, 7000)

        return () => clearTimeout(getTimeApi)
    }, [value])

    // get input by user
    const getInpute = (event) => {
        setValue(event.target.value)
    }

    // filter name and show

    // const filterName = value ? data.filter((n)=>{
    //     return n.username.toLowerCase().includes(value.toLowerCase())
    // }) : []

    const handleSubmit = (item) => {
        setValue(item)
    }

    return (
        <div>
            <h1>FilterBySugestion</h1>
            <input type='text' value={value} onChange={getInpute} />
            <div className="">{value &&
                data.filter((word) =>
                (
                    word.name.toLowerCase().includes(value.toLowerCase())
                )
                ).splice(0, 5).map((item) =>
                (
                    <ul onClick={() => handleSubmit(item.name)} key={item.id}>
                        <li className="">{item.name}</li>
                    </ul>
                )
                )
            }</div>

        </div>

    )
}

export default FilterBySugestion



// second method--------------------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from 'react'

// const FilterBySugestion = () => {
//     const [value, setValue] = useState('');
//     const [data, setData] = useState([]);
//     const [show, setShow] = useState([])

//     useEffect(() => {

//         const getApiData = async () => {
//             try {
//                 const res = await fetch('https://jsonplaceholder.typicode.com/users');
//                 const apiData = await res.json()
//                 console.log(apiData)
//                 setData(apiData)
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//         getApiData()
//     }, [])

//     const getInpute = (event) => {
//         setValue(event.target.value)
//     }

//     useEffect(() => {
//         const filterValue = data.filter((name) =>
//              (name.name.toLowerCase().includes(value.toLowerCase()))
//         );
//         setShow(filterValue)
//     }, [value])

//     return (
//         <>
//             <div>FilterBySugestion</div>
//             <input type='text' value={value} onChange={getInpute} />
//             <div className="">{value && (
//                 <div>
//                     {
//                       show.map((item) =>
//                         (
//                             <ul key={item.id}>
//                                 <li className="">{item.name}</li>
//                             </ul>
//                         )
//                         )
//                     }
//                 </div>
//             )

//             }</div>

//         </>
//     )
// }

// export default FilterBySugestion


