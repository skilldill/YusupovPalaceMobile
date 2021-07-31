import React, {useState} from "react";
import useSound from "react-native-use-sound";

import {AudioPlayerContext} from "./AudioPlayerContext";

export const AudioPlayerProvider = ({children}) => {
    const [audio, setAudio] = useState('');
    const [plaing, setPlaing] = useState(false);
    const [pausing, setPausing] = useState(true);
    const [roomData, setRoomData] = useState(null);

    const [play, pause, stop, audioData] = useSound(audio);

    handlePlay = () => {
        setPlaing(true);
        setPausing(false);
        play();
    }

    handleStop = () => {
        setPlaing(false);
        setPausing(true);
        stop();
    }

    handlePause = () => {
        setPausing(true);
        pause();
    }

    const values = {
        setAudio,
        audioData,
        plaing,
        pausing,
        roomData,
        setRoomData,
        playAudio: handlePlay,
        stopAudio: handleStop,
        pauseAudio: handlePause,
    }

    return (
        <AudioPlayerContext.Provider value={values}>
            {children}
        </AudioPlayerContext.Provider>
    )
}