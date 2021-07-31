import React, { useEffect, useMemo } from "react";
import {View} from "react-native";

import {RoomsService} from "../../core/context";
import { RoomsList } from "./components";
import {roomsStyle} from "./style";

export const Rooms = ({navigation, liked}) => {
    const {rooms, fetchRooms, likedIds} = RoomsService();
    
    useEffect(() => {
        if (rooms.length === 0) {
            fetchRooms();
        }
    } ,[rooms])

    const likedRooms = useMemo(() => rooms.filter((room) => likedIds.includes(room.id)), [rooms, likedIds]);
    const preparedRooms = useMemo(() => liked ? likedRooms : rooms, [rooms, likedRooms, liked]);

    return (
        <View style={roomsStyle.container}>
            {/* <Navbar title="Комнаты" /> */}
            {rooms.length > 0 && <RoomsList rooms={preparedRooms} navigation={navigation} />}
        </View>
    )
}