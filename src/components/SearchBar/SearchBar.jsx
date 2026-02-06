import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({placeholder}) => {
  return (
    <div className='flex justify-center '>

    <div className='w-full md:w-1/2 bg-base p-2 flex  items-center gap-1 shadow-md border-2 rounded-2xl mt-1 '>
        <FaSearch  className='fill-gray-500'/>
        <input type="text" className='w-full outline-none focus:outline-none ' placeholder={placeholder}/>
      
    </div>
    </div>
  )
}

export default SearchBar
