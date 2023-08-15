import React, { useState, useEffect, useRef } from 'react'
import apiClient, { loginEndpoint, setClientToken } from "../../spotify";
import SpotifyNavBar from "../../components/spotify/SpotifyNavBar.jsx";
import SongQueue from "../../components/spotify/SongQueue.jsx";
import SongCard from "../../components/spotify/SongCard.jsx";
import SpotifyControls from "../../components/spotify/SpotifyControls.jsx";
import { useLocation } from "react-router-dom";


function SpotifyPlayer() {
    const [userName, setUserName] = useState("")
    const [pfpImage, setPfpImage] = useState("");
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)

    // const [songCardTrigger, setSongCardTrigger] = useState(false);

    const [isPlaying, setIsPlaying] = useState(false)
    const [trackProgress, setTrackProgress] = useState(0)

    var audioSource = tracks[currentIndex]?.track.preview_url

    const audioRef = useRef(new Audio(tracks[0]?.track.preview_url))

    const intervalRef = useRef();

    const isReady = useRef(false)

    // const { duration } = audioRef.current

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                handleNext();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    useEffect(() => {
        if (audioRef.current.src) {
            if (isPlaying) {
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        } else {
            if (isPlaying) {
                audioRef.current = new Audio(audioSource);
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSource);

        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            isReady.current = true;
        }
    }, [currentIndex]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);




    const location = useLocation();




    console.log(location.state)

    useEffect(() => {
        apiClient.get("me").then((response) => {
            setPfpImage(response.data.images[0].url)
            setUserName(response.data.display_name)
        })
    }, [])

    useEffect(() => {
        if (location.state) {
            apiClient.get(`playlists/${location.state.id}/tracks`).then((response) => {
                setTracks(response.data.items);
                setCurrentTrack(response.data.items[currentIndex].track)
            })
        }
    }, [location.state]);



    const handleNext = () => {
        if (currentIndex < tracks.length - 1) {
            setCurrentIndex(currentIndex + 1);
            apiClient.get(`playlists/${location.state.id}/tracks`).then((response) => {
                setCurrentTrack(response.data.items[currentIndex].track);
            })

        } else setCurrentIndex(0);


        // console.log("CORRUENT",)

        // setSongCardTrigger(prevTrigger => !prevTrigger);



    };


    const handlePrev = () => {
        if (currentIndex - 1 < 0) {
            setCurrentIndex(tracks.length - 1);
            apiClient.get(`playlists/${location.state.id}/tracks`).then((response) => {
                setCurrentTrack(response.data.items[currentIndex].track);
            })

        } else setCurrentIndex(currentIndex - 1);


        // setSongCardTrigger(prevTrigger => !prevTrigger);


    };

    console.log("current", currentTrack)

    return (
        <div class='w-screen h-screen overflow-y-auto'>
            <div><SpotifyNavBar pfpurl={pfpImage} name={userName} /></div>
            <div class="mr-20">
                <div className='mb-5 flex justify-center items-center'>
                    <h1 className='text-gray-400'>Currently Playing</h1>
                </div>

                <div className='mb-5 flex justify-center items-center'>
                    <SongCard currentTrack={currentTrack} album={currentTrack.album} />
                </div>

                <div className='my-5'>
                    <SpotifyControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} handleNext={handleNext} handlePrev={handlePrev} total={tracks.length} />
                </div>

                <div className='flex justify-center items-center'>
                    <SongQueue tracks={tracks} setCurrentIndex={setCurrentIndex} />
                </div>
            </div>


        </div>

    )
}

export default SpotifyPlayer