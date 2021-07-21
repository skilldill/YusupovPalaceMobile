import React from "react";
import {View} from "react-native";

import { Navbar } from "../../core/components";
import {roomsStyle} from "./style";

export const Rooms = () => {
    return (
        <View style={roomsStyle.container}>
            <Navbar title="Комнаты" />
        </View>
    )
}