import React, { useEffect, useState } from "react";
import Tracklist from "./Tracklist";
import Spotify from '../utils/Spotify'

export default function Playlist(props) {
        const [userInput, setUserInput] = useState('')

        const updateSearchResults = (trackToRemove) => {
            const setResults = props.setSearchResults
            setResults(prev => [...prev, trackToRemove])
        }

        const handleChangeInput = (e) => {
            setUserInput(e.target.value)
        }

        useEffect(() => {
            if (userInput) {
                props.setPlaylistName(userInput)
            }
        }, [userInput])

        const submitForm = (e) => {
            e.preventDefault()
            props.submitPlaylist()
        }

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', minWidth: 600}}>
                {props.playlist.length > 0 && <h1>Playlist:</h1>}
                {props.playlist.length > 0 && <Tracklist results={props.playlist} button='-' removeFromPlaylist={props.removeFromPlaylist} updateSearchResults={updateSearchResults}/>}
                {props.playlist.length > 0 &&
                    <form onSubmit={submitForm} style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{padding: 10}}>
                            <label htmlFor="playlist-name">Name your playlist: </label>
                            <input id='playlist-name' type='text' value={userInput} placeholder="Epic Jams" onChange={handleChangeInput} />
                        </div>
                        
                        <button type='submit'>SUBMIT YOUR PLAYLIST</button>
                    </form>
                }
            </div>
        )
    
}