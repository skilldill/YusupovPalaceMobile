import {createContext} from "react";

export const AudioPlayerContext = createContext({
    setAudio: (audio) => {},
    playAudio: () => {},
    pauseAudio: () => {},
    stopAudio: () => {},
    audioData: null,
    plaing: false,
    pausing: false,
    roomData: null,
    time: 0,
    setRoomData: (data) => {}
})