import React, { useState, useEffect } from 'react'
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

import { Link, useLocation } from "react-router-dom";

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const location = useLocation();


    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }



    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered('')
    }






    return (
        <div className="">
            <div className='flex my-5 '>
                <input className="bg-white border-2 border-gray-300 rounded-md text-lg px-4 py-3 h-10 w-96 mr-2" type="text" placeholder={placeholder} onChange={handleFilter} value={wordEntered} />
                {filteredData.length === 0 ? (
                    <LuSearch size={35} className='grid place-items-center cursor-pointer' />

                ) : (
                    <RxCross2 size={35} className='grid place-items-center cursor-pointer' onClick={clearInput} />
                )}
            </div>
            {filteredData.length != 0 && (
                <div className='mt-5 w-96 min-h-fit bg-white shadow-md overflow-hidden overflow-y-auto no-scrollbar rounded-md'>
                    {filteredData.map((value, key) => {
                        return <Link to={`http://localhost:5173/user/postprofile/${value.userId}`} className='no-underline'><div className='w-full h-50 flex items-center text-black hover:bg-gray-200'> <p className='ml-2.5 cursor-pointer my-2.5'> {value.name} </p></div> </Link>
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar