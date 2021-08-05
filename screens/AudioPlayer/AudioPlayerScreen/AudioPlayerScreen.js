import React from "react";
import { SafeAreaView, TouchableOpacity, View, Image, Text } from "react-native";

import {audioPlayerScreenStyle} from "./style";
import {Trackbar} from "../../../shared/components";
import {useAudioPlayer} from "../../../core/context";
import {getReadableDuration} from "../../../shared/utils";

export const AudioPlayerScreen = ({ onClose, room }) => {
    const audioPlayer = useAudioPlayer();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={audioPlayerScreenStyle.container}>
                <View style={audioPlayerScreenStyle.topRow}>
                    <TouchableOpacity onPress={onClose}>
                        <Image source={require('../../../assets/icon-close.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../../../assets/icon-like-outline-white.png')} />
                    </TouchableOpacity>
                </View>
                <Image style={audioPlayerScreenStyle.preview} source={{uri: room.preview}} />
                <Text style={audioPlayerScreenStyle.title}>{room.name}</Text>
                <Text style={audioPlayerScreenStyle.subTitle}>Комната №{room.id}</Text>
                <Trackbar max={100} value={50} />
                <View style={audioPlayerScreenStyle.timeRow}>
                    <Text style={{color: '#fff'}}>{getReadableDuration(audioPlayer.time)}</Text>
                    <Text style={{color: '#fff'}}>{getReadableDuration(audioPlayer.audioData.duration)}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}