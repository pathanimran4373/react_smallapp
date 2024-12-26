import React from 'react'
import SearchFilter from './search-filter'
import SearchItem from './search-item'
import SearchBySuggetion from './searchBySugestion'
import Debouncing from './dbouncing/Debouncing'
const SearchBox = () => {
    return (
        <div>
            <h1>All SearchBox with suggestionBox,filter, debouncing</h1>
            <div className="">
                {/* <SearchFilter /> */}
                {/* <SearchItem /> */}
                {/* <SearchBySuggetion /> */}
                <Debouncing/>
            </div>
        </div>
    )
}

export default SearchBox