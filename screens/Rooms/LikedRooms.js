import React, { useEffect, useMemo } from "react";
import {View} from "react-native";

import { Navbar } from "../../core/components";
import {RoomsService} from "../../core/context";
import { RoomsList } from "./components";
import {roomsStyle} from "./style";

export const LikedRooms = () => {
    const {rooms, likedIds} = RoomsService();
    
    const likedRooms = useMemo(() => rooms.filter((room) => likedIds.includes(room.id)), [rooms, likedIds]) 
    
    return (
        <View style={roomsStyle.container}>
            <Navbar title="Понравилось" />
            {rooms.length > 0 && <RoomsList rooms={likedRooms} />}
        </View>
    )
}