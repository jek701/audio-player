import React, {useEffect, useState} from 'react';
import H5AudioPlayer from "react-h5-audio-player";
import * as Id3 from 'id3js';
import playBtn from './play.png';
import pauseBtn from './pause.png'
// import getAudioDurationInSeconds from "get-audio-duration";

let links = ['https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Wish%20You%20Were%20Gay.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Idontwannabeyouanymore.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20Ocean%20Eyes.mp3', 'https://music.iodev.uz/audio/Billie%20Eilish%20-%20My%20Strange%20Addiction.mp3']

// Adding new el after every two el in "links" arr

links = links.reduce((acc, val, key) => {
    if (key % 2)
        return [...acc, val, 'https://music.iodev.uz/audio/Belissimo_voice_over.mp3']
    return [...acc, val]
}, [])

// Adding new el after every two el in "links" arr

const PlaylistBlock = ({id, active, onclick, src, duration}) => {

    const [musicData, setMusicData] = useState([])

    // getAudioDurationInSeconds(links[0]).then((duration) => {
    //     console.log(duration);
    // });

    // Getting data of music

    useEffect(() => {
        Id3.fromUrl(`${src}`).then((tags) => {
            setMusicData(tags);
        });
    }, [src]);

    if (musicData.length === 0) {
        return null;
    }

    // Getting data of music

    return (
        <div onClick={onclick} className={`playlist-block ${id} ${active}`}>
            <p className='id'><strong>{id}</strong></p>
            <p className='title'>{musicData.title}</p>
            <p className='artist-name'>{musicData.artist}</p>
            <p className='duration'>{duration}</p>
            <audio src={links[id]}/>
        </div>
    )
}

const App = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() =>{
        fetch(`https://music.iodev.uz/audio/`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((response) => response.json())
            .then(e => setApiData(e))
    })

    const [currMusic, setCurrMusic] = useState(0);

    return <>
        <div className='playlist-wrapper'>
            <div className='header-title'>
                <li>#</li>
                <li>Title</li>
                <li>Artist</li>
            </div>
            {links.map((i, index) => {
                return <PlaylistBlock
                    duration={links[index].duration}
                    src={links[index]}
                    onclick={() => setCurrMusic(index)}
                    id={index + 1} active={currMusic === index ? 'active' : ''}/>
            })}

        </div>
        <H5AudioPlayer
            loop={false}
            showSkipControls={true}
            showJumpControls={false}
            autoPlay={false}
            preload={"auto"}
            src={links[currMusic]}
            onPlay={() => console.log("onPlay")}
            onEnded={() => currMusic === (links.length - 1) ? setCurrMusic(0) : setCurrMusic(currMusic + 1)}
            onClickNext={() => currMusic === (links.length - 1) ? setCurrMusic(0) : setCurrMusic(currMusic + 1)}
            onClickPrevious={() => currMusic === 0 ? setCurrMusic(0) : setCurrMusic(currMusic - 1)}
            hasDefaultKeyBindings={true}
            muted={false}
            layout="stacked-reverse"
        />
    </>
};

export default App;