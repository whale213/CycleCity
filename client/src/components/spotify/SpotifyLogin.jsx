import React from 'react'
import { loginEndpoint } from "../../spotify";


function SpotifyLogin() {
    return (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden flex-col">
            <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="logo-spotify"
                className="w-[30%]"
            />
            <a href={loginEndpoint} className="no-underline">
                <div className="w-48 px-8 py-4 text-center bg-white rounded-full text-gray-900 font-semibold mt-20">LOG IN</div>
            </a>
        </div>
    )
}

export default SpotifyLogin