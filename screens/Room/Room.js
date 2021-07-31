import React, { useEffect, useCallback, useState, useMemo } from "react";
import {Image, ScrollView, View, Text, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useAudioPlayer } from "../../core/context";

import { ApiService } from "../../shared/api";
import { getFullStaticUrl, prepareDescription, getReadableDuration } from "../../shared/utils";
import {roomStyle} from "./style";

export const Room = ({route, navigation}) => {
    const {roomId} = route.params;

    const audioPlayer = useAudioPlayer();

    const [roomData, setRoomData] = useState(null);

    const fetchRoom = useCallback(async () => {
        try {
            const {data} = await ApiService.getRoom(roomId);
            setRoomData(data);
            
            audioPlayer.setAudio(getFullStaticUrl(data.audio));
            audioPlayer.setRoomData({ id: roomId, name: data.name, preview: getFullStaticUrl(data.photo) });

            navigation.setOptions({title: data.name})
        } catch(error) {
            console.log(error);
        }
    }, [roomId])

    useEffect(() => {
        fetchRoom();

        if (!!audioPlayer.roomData && audioPlayer.roomData.id !== roomId) {
            audioPlayer.stopAudio();
        }
    }, [])

    
    const handlePressAudio = () => {
        if (!!roomData) {
            audioPlayer.pausing ? audioPlayer.playAudio() : audioPlayer.pauseAudio();
        }
    }
    
    if (!roomData) {
        return <View style={roomStyle.container} />
    }

    return (
        <ScrollView style={roomStyle.container}>
            <View style={roomStyle.controlsBlock}>
                <View style={roomStyle.photoBlock}>
                    <Image style={roomStyle.photo} source={{uri: getFullStaticUrl(roomData.photo)}} />
                    <LinearGradient style={roomStyle.photoGradient} colors={['rgba(49, 49, 49, 0) 100%)', 'rgba(5, 5, 6, 0.8)']} />
                </View>
                <TouchableOpacity style={roomStyle.audioControl} onPress={handlePressAudio}>
                    <Image source={audioPlayer.pausing ? require('../../assets/icon-audio-start.png') : require('../../assets/icon-audio-stop.png')} />
                </TouchableOpacity>
            </View>
            <Text style={roomStyle.title}>{roomData.name}</Text>
            <Text style={roomStyle.subTitle}>Комната №{roomData.id}{!!audioPlayer.audioData ? ` • ${getReadableDuration(audioPlayer.audioData.duration)} минуты` : ''}</Text>
            <Text style={roomStyle.description}>{prepareDescription(roomData.description)}</Text>
        </ScrollView>
    )
}