import React, {useEffect, useState} from 'react';
import H5AudioPlayer from "react-h5-audio-player";

// let links = ['https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3']
//
// // Adding new el after every two el in "links" arr
//
// links = links.reduce((acc, val, key) => {
//     if (key % 2)
//         return [...acc, val, 'https://music.iodev.uz/audio/Belissimo_voice_over.mp3']
//     return [...acc, val]
// }, [])
//
// // Adding new el after every two el in "links" arr

const PlaylistBlock = ({id, active, onclick, src, duration, artist, title, img}) => {

    return (
        <div onClick={onclick} className={`playlist-block ${id} ${active}`}>
            <p className='id'><strong>{id}</strong></p>
            <img className='cover' src={img} alt="" width={40}/>
            <p className='title'>{title}</p>
            <p className='artist-name'>{artist}</p>
            <p className='duration'>{duration}</p>
            <audio src={src}/>
        </div>
    )
}

const NowPlaying = ({ cover, artist, title }) => {
    return (
        <div className='curr-music-wrapper'>
            <img src={'data:image/png;base64,' + cover} alt=""/>
            <div className="text">
                <h1>{artist}</h1>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

const App = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() =>{
        fetch(`https://audio.iodev.uz/public/music`, {
        })
            .then((response) => response.json())
            .then(e => setApiData(e))
        })

    const [currMusic, setCurrMusic] = useState(0);

    return <>
        {apiData.length > 0 ?
            <NowPlaying artist={apiData[currMusic].artist} title={apiData[currMusic].title} cover={apiData[currMusic].cover} />
            :
            null
        }
        <div className='playlist-wrapper'>
            <div className='header-title'>
                <li>#</li>
                <li>Cover</li>
                <li>Title</li>
                <li>Artist</li>
                <li>Duration</li>
            </div>
            {apiData.map((i, index) => {
                return <PlaylistBlock
                    duration={i.playtime}
                    src={'https://audio.iodev.uz/' + i.url}
                    onclick={() => setCurrMusic(index)}
                    id={index + 1} active={currMusic === index ? 'active' : ''}
                    title={i.title}
                    artist={i.artist}
                    img={'data:image/png;base64,' + i.cover}
                />
            })}

        </div>
        {apiData.length > 0 ? <H5AudioPlayer
            loop={false}
            showSkipControls={true}
            showJumpControls={false}
            autoPlay={true}
            preload={"auto"}
            src={'https://audio.iodev.uz/' + apiData[currMusic].url}
            onPlay={() => console.log("onPlay")}
            onEnded={() => currMusic === (apiData.length - 1) ? setCurrMusic(0) : setCurrMusic(currMusic + 1)}
            onClickNext={() => currMusic === (apiData.length - 1) ? setCurrMusic(0) : setCurrMusic(currMusic + 1)}
            onClickPrevious={() => currMusic === 0 ? setCurrMusic(0) : setCurrMusic(currMusic - 1)}
            hasDefaultKeyBindings={true}
            muted={false}
            layout="stacked-reverse"
        /> : null}
    </>
};

export default App;