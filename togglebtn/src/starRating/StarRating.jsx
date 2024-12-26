import React, { useState } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import "./style.css"

const StarRating = () => {


    const [rating, setRating] = useState(0);
    const limit = 5;

    const handleClick = (i) => {
        setRating(i+1)
    }

    return (
        <>
            <div>
                <h1>Star Rating</h1>

            </div>
            <div>
                {
                    [...Array(limit)].map((_, i) => (
                        <span className={i < rating ? " rated" : "star"} key={i} onClick={() => handleClick(i)}>
                            {i < rating ? <FaStar /> : <FaRegStar />}
                        </span>
                    ))
                }
            </div>
        </>
    )
}

export default StarRating