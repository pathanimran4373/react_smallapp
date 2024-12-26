import React, { useContext } from 'react'
import {contextApi} from '../contextApiStore/context'

const SearchInput = () => {

  const {query,setQuery} = useContext(contextApi)

  return (
    <div>
      <input type='text' placeholder='search' value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default SearchInput