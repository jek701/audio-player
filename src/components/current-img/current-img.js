import React from "react";

const CurrImg = ({ cover, artist, title }) => {
    return (
        <div className='cover-wrapper'>
            <img src={cover} alt=""/>
            <h1>{title}</h1>
            <h3>{artist}</h3>
        </div>
    )
}

export default CurrImg