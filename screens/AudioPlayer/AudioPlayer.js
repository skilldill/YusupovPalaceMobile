import React, { useEffect, useState } from "react";
import {View, Text, Modal, TouchableOpacity, Image, Touchable, Pressable} from "react-native";

import {audioPlayerStyle} from "./style";
import {useAudioPlayer} from "../../core/context";
import {AudioPlayerScreen} from "./AudioPlayerScreen";

export const AudioPlayer = ({ children }) => {
    const audioPlayer = useAudioPlayer();

    const [showPlayer, setShowPlayer] = useState(false);

    const togglePlayer = () => {
        if (audioPlayer.pausing) {
            audioPlayer.playAudio();
        } else {
            audioPlayer.pauseAudio();
        }
    }

    return (
        <View style={audioPlayerStyle.container}>
            {children}
            {audioPlayer.plaing && (
                <Pressable onPress={() => setShowPlayer(true)}>
                    <View style={audioPlayerStyle.audioControl}>
                        {!!audioPlayer.roomData && (
                            <View style={audioPlayerStyle.controlInfo}>
                                <Image style={audioPlayerStyle.controPreview} source={{ uri: audioPlayer.roomData.preview }} />
                                <View>
                                    <Text style={audioPlayerStyle.controlTitle}>{audioPlayer.roomData.name}</Text>
                                    <Text style={audioPlayerStyle.controlSubtitle}>Команта № {audioPlayer.roomData.id}</Text>
                                </View>
                            </View>
                        )}
                        <TouchableOpacity 
                            style={audioPlayerStyle.controlPlayButton}
                            onPress={togglePlayer}
                        >
                            <Image 
                                style={audioPlayerStyle.controlPlayButtonIcon}
                                source={audioPlayer.pausing ? require('../../assets/icon-audio-start.png') : require('../../assets/icon-audio-stop.png')} 
                            />
                        </TouchableOpacity>
                    </View>
                </Pressable>
            )}
            <Modal
                animationType="slide"
                transparent
                visible={showPlayer}
            >
                <AudioPlayerScreen 
                    onClose={() => setShowPlayer(false)} 
                    room={audioPlayer.roomData} 
                />
            </Modal>
        </View>
    )
}