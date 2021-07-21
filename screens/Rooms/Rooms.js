import React, { useEffect } from "react";
import {View} from "react-native";

import { Navbar } from "../../core/components";
import {RoomsService} from "../../core/context";
import { RoomsList } from "./components";
import {roomsStyle} from "./style";

export const Rooms = () => {
    const {rooms, fetchRooms} = RoomsService();
    
    useEffect(() => {
        if (rooms.length === 0) {
            fetchRooms();
        }
    } ,[rooms])

    return (
        <View style={roomsStyle.container}>
            <Navbar title="Комнаты" />
            {rooms.length > 0 && <RoomsList rooms={rooms} />}
        </View>
    )
}