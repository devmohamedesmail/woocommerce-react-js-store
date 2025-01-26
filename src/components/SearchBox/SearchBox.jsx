import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const [query, setQuery] = useState("");
  
  const navigate = useNavigate();

  const onChangeSearch = (event) => {
    setQuery(event.target.value)
  }

  // search function
  const navigatetoSearchPage = () => {
    navigate(`/search/result?q=${encodeURIComponent(query)}`);
  }
  return (
    <div className="middle-section ">
      <div className="search-box bg-white flex items-center border px-2">
        <input type='search' placeholder='search for products' onChange={onChangeSearch} className='flex-1 py-2 focus:outline-none placeholder:text-sm' />
        <button onClick={navigatetoSearchPage} className='bg-black p-2 rounded-lg'> <CiSearch color='white' /></button>
      </div>
    </div>
  )
}
