import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


const Pagination = ({ productData, total, page, setPage }) => {

    const handlePagination = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= total / 10) {
            setPage(selectedPage)

        }

    }
    return (
        <>
            {
                productData.length ? (
                <div style={{ backgroundColor: "red" }} className='pgination-container'>
                    {/* left arrow btn logic */}
                    <span className={page <= 1 ? "btn-disabled" : ""} onClick={() => handlePagination(page - 1)}>
                        {/* left arrow */}
                        <GoArrowLeft /></span>
                    {/* middal logic */}
                    {[...Array(total / 10)].map((_, i) => (
                        <p className={page === i + 1 ? "page-selected" : ""} key={i} onClick={() => handlePagination(i + 1)}>{i + 1}</p>
                    ))}
                    {/* right arrow btn logic */}
                    <span className={page >= total / 10 ? "btn-disabled" : ""} onClick={() => handlePagination(page + 1)}>
                        {/* right arrow */}
                        <GoArrowRight /></span>
                </div>
                ) : null
            }
        </>
    )
}

export default Pagination