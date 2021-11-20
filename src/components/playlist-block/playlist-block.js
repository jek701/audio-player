import React from "react";

const PlaylistBlock = ({id, active, onclick, src, duration, artist, title, img, audioWave}) => {

    return (
        <div onClick={onclick} className={`playlist-block ${id} ${active}`}>
            <div className='cover-text'>
                <img className='cover' src={img} alt="" width={40}/>
                <div className='title-artist'>
                    <p className='title'>{title}</p>
                    <p className='artist-name'>{artist}</p>
                </div>
            </div>
            <p className='duration'>{duration}</p>
            <div className='audio-wave-wrapper'>{audioWave}</div>
            <audio preload='none' src={src}/>
        </div>
    )
}

export default PlaylistBlock