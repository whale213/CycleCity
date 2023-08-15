import React from 'react'

function SongCard({ currentTrack, album }) {
    // console.log(currentTrack)

    const artists = [];
    album?.artists?.forEach((element) => {
        artists.push(element.name);
    });

    console.log("crnt track", currentTrack)

    return (
        <div className="w-[30%] h-[30%] rounded-xl flex flex-col justify-center items-center">
            <div className="w-[70%] mx-auto flex items-center justify-center ">
                <img src={album?.images[0]?.url} alt="album art" className="rounded-xl w-full aspect-w-1 aspect-h-1" />
            </div>
            <div className=" mt-5 ">
                <div className="overflow-hidden text-xl font-semibold text-gray-400 flex text-center">
                    <div className="inline-block whitespace-nowrap animation-marquee px-10">
                        <p>{currentTrack.name}</p>
                        <p>Album</p>
                        <p>{album?.name + " - " + artists?.join(", ")}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SongCard