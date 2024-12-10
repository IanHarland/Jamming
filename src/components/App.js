import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist'
import Spotify from '../utils/Spotify';

function App() {
    const [spotifyQuery, setSpotifyQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [playlist, setPlaylist] = useState([])
    const [playlistName, setPlaylistName] = useState('')

    useEffect(() => {
        Spotify.getAccessToken()
    }, [])

    const addToPlaylist = (trackObj) => {
        setPlaylist(prev => [...prev, trackObj])
    }

    const removeFromPlaylist = (trackObj) => {
        setPlaylist(prev => prev.filter((track) => {
            return track.id !== trackObj.id
        }))
    }

    useEffect(() => {
        console.log('playlist:')
        console.log(playlist)
    }, [playlist])

    const submitPlaylist = () => {
        const trackUris = playlist.map(tune => tune.uri)
        Spotify.savePlaylist(playlistName, trackUris)
        setPlaylist([])
    }


    return(
        <div>
            <SearchBar setSpotifyQuery={setSpotifyQuery}/>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} stringToSearch={spotifyQuery} addToPlaylist={addToPlaylist}/>
                <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} setSearchResults={setSearchResults} setPlaylistName={setPlaylistName} submitPlaylist={submitPlaylist}/>
            </div>
        </div>
    )
}

export default App;
