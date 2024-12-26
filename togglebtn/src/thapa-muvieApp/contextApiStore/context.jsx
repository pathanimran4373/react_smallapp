
import React, { useEffect, useState } from "react";

import { createContext } from "react";

const contextApi = createContext();

const ContextProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [isError, setError] = useState(null
        // { show:"false", msg: "" }
    )
    // it get data by input fild and search
    const [query, setQuery] = useState("titanic")

    useEffect(() => {
        const handleDebounccing = setTimeout(() => {
            const apiDataFunction = async () => {
                try {
                    setLoading(true);
                    const response = await fetch(`http://www.omdbapi.com/?apikey=eadbaa55&s=${query}`);
                    const apiData = await response.json()
                    // console.log(apiData);
                    setData(apiData.Search)
                    setLoading(false)
                    // setQuery("")
                    // if (apiData.Response === "True") {
                    //     setLoading(false)

                    //     setData(apiData.Search)

                    // } else {
                    //     setError({show: "true",
                    //         msg: "apiData.error"
                    //     })
                    // }
                } catch (error) {
                    console.error(error)

                    setLoading(false)

                }
            }
            apiDataFunction()
        }, 3000);

        return () => clearTimeout(handleDebounccing)
    }, [query])

    return <contextApi.Provider value={{ isLoading,setLoading,setData, data, isError, query, setQuery }}>
        {children}
    </contextApi.Provider>
}
export { contextApi, ContextProvider }


// second method

// import React, { useEffect, useState, createContext } from "react";

// const contextApi = createContext();

// const ContextProvider = ({ children }) => {
//   const [state, setState] = useState({
//     isLoading: true,
//     data: [],
//     isError: { show: false, msg: "" },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://www.omdbapi.com/?apikey=eadbaa55&s=titanic');
//         const apiData = await response.json();

//         if (apiData.Response === "True") {
//           setState({ isLoading: false, data: apiData.Search, isError: { show: false, msg: "" } });
//         } else {
//           setState({ isLoading: false, data: [], isError: { show: true, msg: "API error" } });
//         }
//       } catch (error) {
//         console.error(error);
//         setState({ isLoading: false, data: [], isError: { show: true, msg: "Network error" } });
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <contextApi.Provider value={state}>
//       {children}
//     </contextApi.Provider>
//   );
// };

// export { contextApi, ContextProvider };
