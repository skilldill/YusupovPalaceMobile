import React, { useMemo } from "react";
import { SafeAreaView, TouchableOpacity, View, Image, Text } from "react-native";

import {audioPlayerScreenStyle} from "./style";
import {Trackbar} from "../../../shared/components";
import {RoomsService, useAudioPlayer} from "../../../core/context";
import {getReadableDuration} from "../../../shared/utils";

export const AudioPlayerScreen = ({ onClose, room }) => {
    const audioPlayer = useAudioPlayer();
    const roomService = RoomsService();

    const handleToggleAudio = () => {
        if (audioPlayer.pausing) {
            audioPlayer.playAudio();
        } else {
            audioPlayer.pauseAudio();
        }
    }

    const handleLikeRoom = () => {
        roomService.likeRoom(audioPlayer.roomData.id);
    }

    const roomLiked = roomService.likedIds.includes(audioPlayer.roomData.id);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={audioPlayerScreenStyle.container}>
                <View style={audioPlayerScreenStyle.topRow}>
                    <TouchableOpacity onPress={onClose}>
                        <Image source={require('../../../assets/icon-close.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLikeRoom}>
                        <Image source={roomLiked ? require('../../../assets/icon-24-like-active.png') : require('../../../assets/icon-like-outline-white.png')} />
                    </TouchableOpacity>
                </View>
                <Image style={audioPlayerScreenStyle.preview} source={{uri: room.preview}} />
                <Text style={audioPlayerScreenStyle.title}>{room.name}</Text>
                <Text style={audioPlayerScreenStyle.subTitle}>Комната №{room.id}</Text>
                
                <Trackbar 
                    max={audioPlayer.audioData.duration} 
                    value={audioPlayer.time}
                    parrentPaddings={32}
                />
                
                <View style={audioPlayerScreenStyle.timeRow}>
                    <Text style={audioPlayerScreenStyle.time}>
                        {getReadableDuration(audioPlayer.time)}
                    </Text>

                    <Text style={audioPlayerScreenStyle.time}>
                        {getReadableDuration(audioPlayer.audioData.duration)}
                    </Text>
                </View>

                <View style={audioPlayerScreenStyle.controls}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/icon-audio-prev.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={audioPlayerScreenStyle.buttonCircle}
                        onPress={handleToggleAudio}
                    >
                        <Image source={audioPlayer.pausing ? require('../../../assets/icon-audio-start.png') : require('../../../assets/icon-audio-stop.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../../../assets/icon-audio-next.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}