import React from 'react'
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

function SpotifyControls({ isPlaying, setIsPlaying, handleNext, handlePrev }) {
    return (
        <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
            <div className="w-1/2 mx-auto flex items-center justify-between">
                <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform transform hover:scale-110" onClick={handlePrev}>
                    <IoPlaySkipBack />
                </div>
                <div
                    className={
                        isPlaying ? "w-16 h-16 rounded-full bg-red-500 flex items-center justify-center cursor-pointer transition-transform transform hover:scale-110" : "play-pause-btn flex"
                    }
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? <FaPause /> : <IoPlay />}
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform transform hover:scale-110 ml-4" onClick={handleNext}>
                    <IoPlaySkipForward />
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default SpotifyControls