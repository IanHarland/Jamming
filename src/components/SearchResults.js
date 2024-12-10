import React, {useState, useEffect} from "react";
import Tracklist from './Tracklist';
import Spotify from '../utils/Spotify'

const mockData = {
    ok: true,
    results: [
        {
            artist: 'Pink Floyd',
            song: 'Time',
            id: 1
        },
        {
            artist: 'Led Zeppelin',
            song: 'Dazed and Confused',
            id: 2
        },
        {
            artist: 'The Beatles',
            song: 'Strawberry Fields Forever',
            id: 3
        },
        {
            artist: 'Joni Mitchell',
            song: 'Help Me',
            id: 4
        }
    ]
}

export default function SearchResults(props) {
    const results = props.searchResults
    const stringToSearch = props.stringToSearch

    useEffect(() => {
        if (stringToSearch) {
            Spotify.search(stringToSearch).then((response) => {
                props.setSearchResults(response)
            })
        }
    }, [stringToSearch])

    useEffect(() => {
        console.log('results:', results)
    }, [results])

    const updateSearchResults = (trackObj) => {
        props.setSearchResults(results => results.filter(obj => obj.id !== trackObj.id))
    }

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', minWidth: 600}}>
                {results.length !== 0 && <h1>Results:</h1>}
                {results.length !== 0 && 
                    <div>
                        <Tracklist results={results} button='+' addToPlaylist={props.addToPlaylist} updateSearchResults={updateSearchResults}/>
                    </div>
                }
            </div>
        )
}