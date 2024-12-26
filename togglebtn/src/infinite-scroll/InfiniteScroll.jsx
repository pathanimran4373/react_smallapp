import React, { useEffect, useState } from 'react'

const InfiniteScroll = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)


    // call api
    const apiFunction = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?` + new URLSearchParams({
                _limit: 10,
                _page: page
            }));
            const resData = await res.json();
            // console.log(resData)
            setData((previous) => [...previous, ...resData])
            setLoading(false)
        } catch (error) {
            console.error('errror')
        }
    }
    useEffect(() => {
        apiFunction()
    }, [page])

    // for infinite scroll
    const handleInfiniteScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop +2>= document.documentElement.scrollHeight) {
            setLoading(true)
            setPage((prev) => prev + 1)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll)
    }, [])
    return (
        <div>
            <h1>InfiniteScroll</h1>{
                loading ? (<h1>Loding....</h1>) : (data.map((e, i) => {
                    return (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "300px", height: "200px", padding: "10px", border: "2px" }}
                            key={i}>
                            <h2>{e.title.substr(0, 15)}</h2>
                            <span>{e.body}</span>
                        </div>

                    )
                }))
            }

        </div>
    )
}

export default InfiniteScroll