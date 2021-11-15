import React from "react";

const PlaylistBlock = ({id, active, onclick, src, duration, artist, title, img, audioWave}) => {

    return (
        <div onClick={onclick} className={`playlist-block ${id} ${active}`}>
            {/*<p className='id'><strong>{id}</strong></p>*/}
            <div className='cover-text'>
                <img className='cover' src={img} alt="" width={40}/>
                <div className='title-artist'>
                    <p className='title'>{title}</p>
                    <p className='artist-name'>{artist}</p>
                </div>
            </div>
            <p className='duration'>{duration}</p>
            <div className='audio-wave-wrapper'>{audioWave}</div>
            <audio src={src}/>
        </div>
    )
}

export default PlaylistBlock