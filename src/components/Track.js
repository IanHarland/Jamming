import React from "react";

export default function Track({info}) {

    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        width: "30%",
        minWidth: 400,
        paddingTop: '10px',
        fontSize: '18px'
    }

    return (
        <li style={style} id={info.id}>{info.name}<span>{info.artist}</span></li>
    )
}