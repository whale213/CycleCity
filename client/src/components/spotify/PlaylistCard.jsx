import React from 'react'
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import apiClient, { loginEndpoint, setClientToken } from "../../spotify";


function PlaylistCard({ playlist }) {



    return (
        <div
            className="relative w-40 h-45 border-opacity-18 bg-gradient-to-br p-[1%] mb-[2%] cursor-pointer transition-transform transform duration-300 hover:scale-110 hover:opacity-90 hover:duration-400"
            key={playlist.id}
        // onClick={() => playPlaylist(playlist.id)}
        >
            <img
                src={playlist.images[0].url}
                className="playlist-image w-full h-auto rounded-lg"
                alt="Playlist-Art"
            />

            <div className='h-[60%] min-w-fit overflow-x-scroll no-scrollbar'>
                <p className="font-semibold text-xl text-gray-300 truncate-2-lines">{playlist.name}</p>
            </div>
            <p className="playlist-subtitle font-normal text-xs text-gray-300">{playlist.tracks.total} Songs</p>


            {/* <div className="playlist-fade absolute right-0 bottom-0 opacity-0 w-84 h-34 bg-gradient-to-tl from-transparent to-blue-600 flex items-end justify-end p-8 transition duration-500">
                <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                    <AiFillPlayCircle />
                </IconContext.Provider>
            </div> */}

        </div>


    )
}

export default PlaylistCard