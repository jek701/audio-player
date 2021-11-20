import React, {useEffect, useState} from 'react';
import H5AudioPlayer from "react-h5-audio-player";
import playBtn from './img/play.png'
import PlaylistBlock from "./components/playlist-block/playlist-block";
import CurrImg from "./components/current-img/current-img";

const App = () => {

    const [apiData, setApiData] = useState([])
    const [currMusic, setCurrMusic] = useState(0);
    const [playing, setPlaying] = useState(true)

    useEffect(() =>{
        fetch(`https://apiradio.bellissimo.uz/public/music`, {
        })
            .then((response) => response.json())
            .then(e => setApiData(e))
        }, [])

    return <>
        <div className='playlist-wrapper'>
            <h1 className='main-text'>Playlist</h1>

            {apiData.map((i, index) => {
                return <PlaylistBlock
                    duration={i.playtime}
                    src={'https://apiradio.bellissimo.uz/' + i.url}
                    onclick={() => setCurrMusic(index)}
                    id={index + 1} active={currMusic === index ? 'active' : ''}
                    title={i.title}
                    artist={i.artist}
                    img={'data:image/png;base64,' + i.cover}
                    audioWave={currMusic === index ? <svg className={playing === true ? 'active' : 'non-active'} id="wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 38.05">
                        <path id="Line_1" data-name="Line 1" d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"/>
                        <path id="Line_2" data-name="Line 2" d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"/>
                        <path id="Line_3" data-name="Line 3" d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"/>
                        <path id="Line_4" data-name="Line 4" d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"/>
                        <path id="Line_5" data-name="Line 5" d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"/>
                        <path id="Line_6" data-name="Line 6" d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"/>
                        <path id="Line_7" data-name="Line 7" d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"/>
                        <path id="Line_8" data-name="Line 8" d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"/>
                        <path id="Line_9" data-name="Line 9" d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"/>
                    </svg> : <img className='play-btn-img' src={playBtn} alt=""/>}
                />
            })}

        </div>

        {apiData.length > 0 ?
            <div className='player-wrapper'>
                <CurrImg
                    cover={'data:image/png;base64,' + apiData[currMusic].cover}
                    artist={apiData[currMusic].artist}
                    title={apiData[currMusic].title}
                />
                <div className='big-audio-wave'>
                    <svg className={playing === true ? 'active' : 'non-active'} id="wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 38.05">
                        <path id="Line_1" data-name="Line 1" d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"/>
                        <path id="Line_2" data-name="Line 2" d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"/>
                        <path id="Line_3" data-name="Line 3" d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"/>
                        <path id="Line_4" data-name="Line 4" d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"/>
                        <path id="Line_5" data-name="Line 5" d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"/>
                        <path id="Line_6" data-name="Line 6" d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"/>
                        <path id="Line_7" data-name="Line 7" d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"/>
                        <path id="Line_8" data-name="Line 8" d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"/>
                        <path id="Line_9" data-name="Line 9" d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"/>
                    </svg>
                </div>
                <H5AudioPlayer
                    loop={false}
                    showSkipControls={true}
                    showJumpControls={false}
                    autoPlay={true}
                    preload={'none'}
                    src={'https://apiradio.bellissimo.uz/' + apiData[currMusic].url}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onEnded={() => currMusic === (apiData.length - 1) ? setCurrMusic(0) : setCurrMusic(currMusic + 1)}
                    onClickNext={() => currMusic === (apiData.length - 1) ? setCurrMusic(0) : setCurrMusic(currMusic + 1)}
                    onClickPrevious={() => currMusic === 0 ? setCurrMusic(0) : setCurrMusic(currMusic - 1)}
                    hasDefaultKeyBindings={true}
                    muted={false}
                    layout="stacked-reverse"
                />
            </div>
            :
            null}
    </>
};

export default App;