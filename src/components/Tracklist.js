import React, {useState} from "react";
import Track from './Track';

export default function Tracklist(props) {
    const results = props.results
    const button = props.button


    const handleSubmit = (e) => {
        e.preventDefault()
        const selectedTrack = results.filter(result => result.id == e.target.name)[0]
        if (button === '+') {
            props.addToPlaylist(selectedTrack)
        } else {
            props.removeFromPlaylist(selectedTrack)
        }
        props.updateSearchResults(selectedTrack)
    }
    
    return (
        <ul style={{listStyle: "none", display: 'flex', flexDirection: 'column', width: 500, border: '5px solid black', padding: 10, minWidth: 500, }}>
            {results.map((result) => {
                return (
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Track info={result}/>
                        <form name={result.id} onSubmit={handleSubmit}>
                            <button type='submit' style={{fontSize: 18, marginLeft: 10}}>{button}</button>
                        </form>
                    </div>
                )
            })}
        </ul>
    )
};