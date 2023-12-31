import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


function SpotifyNavBar({ pfpurl, name }) {

    return (
        <nav className="max-w-screen-2xl ">
            <div className="max-w-[80%] px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <FaSpotify size={35} style={{ color: "#1DB954" }} />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                                <a href="http://localhost:5173/user/spotify/library" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Library</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <h2 className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{name}</h2>
                        <div className="relative ml-3">
                            <div>
                                <img className="h-10 w-10 rounded-full" src={pfpurl} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default SpotifyNavBar