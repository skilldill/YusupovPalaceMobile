import React from "react";
import {View} from "react-native";

import { Navbar } from "../../core/components";
import {RoomsService} from "../../core/context";
import {roomsStyle} from "./style";

export const Rooms = () => {
    const {} = RoomsService()
    return (
        <View style={roomsStyle.container}>
            <Navbar title="Комнаты" />
        </View>
    )
}