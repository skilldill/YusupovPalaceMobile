import React, {useState} from "react";
import useSound from "react-native-use-sound";

import {AudioPlayerContext} from "./AudioPlayerContext";

export const AudioPlayerProvider = ({children}) => {
    const [audio, setAudio] = useState('');
    const [plaing, setPlaing] = useState(false);
    const [pausing, setPausing] = useState(true);
    const [roomData, setRoomData] = useState(null);
    
    const [play, pause, stop, audioData] = useSound(audio);
    
    const [time, setTime] = useState(0);
    const [timeInterval, setTimeInterval] = useState(null);

    const startTime = () => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                const currentTime = prevTime + 1;

                if (currentTime > audioData.duration) {
                    return handleStop();
                }

                setTime(currentTime);
            });
        }, 1000)

        setTimeInterval(interval);
    }

    handlePlay = () => {
        setPlaing(true);
        setPausing(false);
        play();
        startTime();
    }

    handleStop = () => {
        setPlaing(false);
        setPausing(true);
        clearInterval(timeInterval);
        setTime(0);
        stop();
    }

    handlePause = () => {
        setPausing(true);
        pause();
        clearInterval(timeInterval);
    }

    const values = {
        setAudio,
        audioData,
        plaing,
        pausing,
        roomData,
        setRoomData,
        time,
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