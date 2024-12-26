import React, { useState } from 'react'

const SearchItem = () => {

    const [item, setItem] = useState(["apple", "orange", "kivi", "banana"]);
    const [input, setInput] = useState('')
// cheak unnecesary re-rendring
    console.log('searchItem file is exist')

    const filterFunction = item.filter((value) => {
        return (
            value.toLowerCase().includes(input.toLowerCase())

        )
    }
    )

    return (
        <div>
            <h1>
                Search fruits
            </h1>
            <div>
                <input type='text' placeholder='enter name' onChange={(e) => setInput(e.target.value)} />
                {/* <span>{input}</span> */}
            </div>
            <div>
                {
                    filterFunction.map((ele) => {
                        return (
                            <div className="name" key={ele}>{ele}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchItem