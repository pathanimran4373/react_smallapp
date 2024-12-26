import React, { useEffect, useState } from 'react'
import "./style.scss"
import Pagination from './Pagination';
export const Product = () => {

    const [productData, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);


    useEffect(() => {
        apiFunction()
    }, [page])


    const apiFunction = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`)
            const resData = await response.json()
            // console.log(resData)
            setData(resData.products)
            setTotal(resData.total)
        } catch (error) {
            console.error('sorry, data is not found')
        }
    }
    return (
        <div>
            <h1>product list</h1>
            <div className='product-container'>
                {
                    productData && productData.length ? productData.map((item) => {
                        return (
                            <div key={item.id} className='product-box'>
                                <img src={item.thumbnail} alt={item.title} />
                                <h3>{item.title}</h3>
                                <span>{item.price}</span>
                            </div>
                        )
                    }) : "Loding......................."
                }
            </div>
            <Pagination
                productData={productData}
                total={total}
                page={page}
                setPage={setPage}
            />
        </div>
    )
}
