import React from "react";
import { SafeAreaView, TouchableOpacity, View, Image } from "react-native";

import {audioPlayerScreenStyle} from "./style";

export const AudioPlayerScreen = ({ onClose }) => {
    return (
        <SafeAreaView style={audioPlayerScreenStyle.container}>
            <View style={audioPlayerScreenStyle.topRow}>
                <TouchableOpacity onPress={onClose}>
                    <Image source={require('../../../assets/icon-close.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../../../assets/icon-like-outline-white.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}