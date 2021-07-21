import React from "react";
import { View, Image, Text } from "react-native";

import {boardStyle} from "./style";

export const Board = ({src, description}) => {
    return (
        <View style={boardStyle.container}>
            <Image style={boardStyle.image} source={src} />
            <Text style={boardStyle.description}>{description}</Text>
        </View>
    )
}