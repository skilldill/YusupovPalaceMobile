import React from "react";
import {ScrollView, Image} from "react-native";
import { getFullImageUrl } from "../../../../shared/utils";

import {roomsListStyle} from "./style";

export const RoomsList = ({rooms}) => {
    return (
        <ScrollView style={roomsListStyle.container}>
            {rooms.map((room, i) => 
                <Image 
                    key={i} 
                    source={{uri: getFullImageUrl(room.preview)}} 
                    height={100}
                />
            )}
        </ScrollView>
    )
}