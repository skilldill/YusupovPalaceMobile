import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";

import {roomCardStyle} from "./style";
import {getFullImageUrl} from "../../../../shared/utils";

export const RoomCard = ({room}) => {
    return (
        <View style={roomCardStyle.container}>
            <Image 
                style={roomCardStyle.preview}
                source={{uri: getFullImageUrl(room.preview)}}
            />
            
            <View style={roomCardStyle.info}>
                <Text style={roomCardStyle.title}>{room.name}</Text>
                <Text style={roomCardStyle.subtitle}>Комната №{room.id}</Text>    
            </View>

            <TouchableOpacity style={roomCardStyle.like}>
                <Image source={require('../../../../assets/icon-24-like.png')} />
            </TouchableOpacity>
        </View>
    )
}