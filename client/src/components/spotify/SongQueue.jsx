import React from 'react'

export default function SongQueue({ tracks, setCurrentIndex }) {

    function formatMilliseconds(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    return (
        <div className="w-[80%] h-[35%] p-3 rounded-xl flex flex-col justify-center items-center bg-slate-500 mx-[5%]">
            <div className="w-[80%] flex flex-col justify">
                <p className="text-xl font-bold text-white text-left mb-4">Tracks</p>
                <div className="h-80 w-full overflow-y-auto no-scrollbar">

                    {tracks?.map((track, index) => (
                        <div
                            key={index + "key"}
                            className="flex justify-between w-full py-2 px-0.5 text-base font-medium text-white cursor-pointer transition-transform hover:scale-95"
                            onClick={() => setCurrentIndex(index)}
                        >
                            <p className="w-3/4 overflow-hidden overflow-ellipsis">{track?.track?.name}</p>
                            {console.log(track.track)}
                            <p>{formatMilliseconds(track.track.duration_ms)}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}