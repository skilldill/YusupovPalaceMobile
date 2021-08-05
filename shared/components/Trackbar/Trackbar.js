import React, { useState } from "react";
import {View} from "react-native";

import {trackbarStyle} from "./style";

export const Trackbar = ({onChange, value, max}) => {
    const [circlePosition, setCirclePosition] = useState(0);

    const handleTouchStart = (event) => {
        console.log(event.target.viewConfig)
        const {locationX} = event.nativeEvent.changedTouches[0];
        setCirclePosition(locationX);
    }

    const handleTouchMove = (event) => {
        const {locationX} = event.nativeEvent.changedTouches[0];
        setCirclePosition(locationX);
    }

    const handleTouchEnd = (event) => {
        // const {locationX} = event.nativeEvent.changedTouches[0];
        // setCirclePosition(locationX - 8);
    }

    return (
        <View 
            style={trackbarStyle.container}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <View style={trackbarStyle.track}>
                <View style={[trackbarStyle.trackValue, {width: circlePosition}]} />
            </View>
            <View style={[trackbarStyle.circle, {transform: [{translateX: circlePosition}]}]} />
        </View>
    )
}