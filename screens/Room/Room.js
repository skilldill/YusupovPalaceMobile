import React, { useEffect, useCallback, useState, useMemo } from "react";
import {Image, ScrollView, View, Text, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import useSound from "react-native-use-sound";

import { ApiService } from "../../shared/api";
import { getFullStaticUrl, prepareDescription, getReadableDuration } from "../../shared/utils";
import {roomStyle} from "./style";

export const Room = ({route, navigation}) => {
    const {roomId} = route.params;

    const [roomData, setRoomData] = useState(null);
    const [audioStarted, setAudioStarted] = useState(false);

    const [audioPlay, audioPause, audioStop, audioData] = useSound(!!roomData ? getFullStaticUrl(roomData.audio) : '');

    const fetchRoom = useCallback(async () => {
        try {
            const {data} = await ApiService.getRoom(roomId);
            console.log(data.audio)
            setRoomData(data);
            navigation.setOptions({title: data.name})
        } catch(error) {
            console.log(error);
        }
    }, [roomId])

    useEffect(() => {
        fetchRoom();
    }, [])

    
    const handlePressAudio = () => {
        if (audioStarted) {
            audioStop();
        } else {
            audioPlay();
            console.log(audioData);
        }

        setAudioStarted(!audioStarted);
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
                    <Image source={audioStarted ? require('../../assets/icon-audio-stop.png') : require('../../assets/icon-audio-start.png')} />
                </TouchableOpacity>
            </View>
            <Text style={roomStyle.title}>{roomData.name}</Text>
            <Text style={roomStyle.subTitle}>Комната №{roomData.id}{!!audioData ? ` • ${getReadableDuration(audioData.duration)} минуты` : ''}</Text>
            <Text style={roomStyle.description}>{prepareDescription(roomData.description)}</Text>
        </ScrollView>
    )
}