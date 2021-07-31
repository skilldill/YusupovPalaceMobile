import {useContext} from "react";
import {AudioPlayerContext} from "./AudioPlayerContext";

export const useAudioPlayer = () => {
    const audioPlayer = useContext(AudioPlayerContext);
    return audioPlayer;
}