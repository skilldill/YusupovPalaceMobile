import React from "react";
import {View} from "react-native";

import { Navbar } from "../../core/components";
import {roomsStyle} from "./style";

export const LikedRooms = () => {
    return (
        <View style={roomsStyle.container}>
            <Navbar title="Понравилось" />
        </View>
    )
}