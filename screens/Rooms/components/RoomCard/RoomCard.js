import React, { useCallback, useMemo } from "react";
import {View, Image, Text, TouchableOpacity, Touchable, Pressable} from "react-native";

import {roomCardStyle} from "./style";
import {getFullImageUrl} from "../../../../shared/utils";
import { RoomsService } from "../../../../core/context";

export const RoomCard = ({room}) => {
    const {likedIds, likeRoom} = RoomsService();

    const likeIcon = useMemo(() => likedIds.includes(room.id) ? 
        require('../../../../assets/icon-24-like-active.png') :
        require('../../../../assets/icon-24-like.png'), 
    [likedIds, room])

    const handlePress = useCallback(() => {
        console.log(room);
    }, [room])

    return (
        <Pressable style={roomCardStyle.container} onPress={handlePress}>
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
        </Pressable>
    )
}