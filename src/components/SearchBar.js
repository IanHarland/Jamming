import React, {useEffect, useState} from 'react';

export default function SearchBar({setSpotifyQuery}) {

    const [query, setQuery] = useState('')

    const changeHandler = (e) => {
        const q = e.target.value;
        setQuery(q)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setSpotifyQuery(query)
    }


    return (
        <div style={{justifyContent: 'center', display: 'flex', paddingTop:10}}>
          <form onSubmit={submitHandler}>
            <input 
                id='query'
                placeholder='Search Spotify'
                name='query'
                value={query}
                type='text'
                onChange={changeHandler}
                style={{fontSize:25}}
            />
            <button type='submit' style={{fontSize:25, border: '2px solid black'}}>Search</button>
          </form>  
        </div>
    )
}