import React, { useState, useEffect } from 'react'
import apiClient, { loginEndpoint, setClientToken } from "../../spotify";
import SpotifyLogin from "../../components/spotify/SpotifyLogin.jsx";
import SpotifyNavBar from "../../components/spotify/SpotifyNavBar.jsx";
import PlaylistCard from "../../components/spotify/PlaylistCard.jsx";



function SpotifyHome() {
    const [token, setToken] = useState("");
    const [pfpImage, setPfpImage] = useState("");
    const [userName, setUserName] = useState("")
    const [playlists, setPlaylists] = useState(null)


    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = ""
        console.log("token", token)
        console.log("hash", hash)
        if (!token && hash) {
            const _token = hash.split('&')[0].split("=")[1]
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
        }

        apiClient.get("me").then((response) => {
            setPfpImage(response.data.images[0].url)
            setUserName(response.data.display_name)
        })

        apiClient.get("me/playlists").then(function (response) {
            setPlaylists(response.data.items)
        })

    }, []);



    return (
        <div>
            {token ? (
                <div class='w-screen h-screen overflow-y-auto'>
                    <div><SpotifyNavBar pfpurl={pfpImage} name={userName} /></div>
                    <h1 class="text-2xl sm:text-5xl md:text-5xl font-bold text-seashell m-5">Playlists</h1>

                    <div className='m-5 flex flex-wrap'>
                        {playlists?.map(playlist => (
                            <div key={playlist.id} className='p-16 min-h-fit'>
                                <PlaylistCard playlist={playlist} />
                            </div>
                        ))}
                    </div>

                </div>






            ) : (
                <SpotifyLogin />
            )}
        </div>

    )
}

export default SpotifyHome