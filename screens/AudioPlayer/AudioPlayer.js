import React, { useEffect } from "react";
import {View, Modal} from "react-native";

import {audioPlayerStyle} from "./style";
import {useAudioPlayer} from "../../core/context";

export const AudioPlayer = ({ children }) => {
    const {setAudio, plaing} = useAudioPlayer();

    return (
        <View style={audioPlayerStyle.container}>
            {children}
            {plaing && (
                <View style={audioPlayerStyle.audioControl}>

                </View>
            )}
        </View>
    )
}