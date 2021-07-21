import React, { useMemo } from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";

import {roomCardStyle} from "./style";
import {getFullImageUrl} from "../../../../shared/utils";
import { RoomsService } from "../../../../core/context";

export const RoomCard = ({room}) => {
    const {likedIds, likeRoom} = RoomsService();

    const likeIcon = useMemo(() => likedIds.includes(room.id) ? 
        require('../../../../assets/icon-24-like-active.png') :
        require('../../../../assets/icon-24-like.png'), 
    [likedIds, room])

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

            <TouchableOpacity 
                style={roomCardStyle.like} 
                onPress={() => likeRoom(room.id)}
            >
                <Image source={likeIcon} />
            </TouchableOpacity>
        </View>
    )
}