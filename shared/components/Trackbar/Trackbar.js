import React, { useState, useRef, useEffect, useMemo } from "react";
import {View, Dimensions} from "react-native";

import {trackbarStyle} from "./style";
import {percentsToPX, valueToPercents} from "./Tracbar.utils";

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const Trackbar = ({onChange, value, max, parrentPaddings}) => {
    const [circlePosition, setCirclePosition] = useState(0);

    const trackBar = useRef(null);

    const trackWidth = useMemo(() => !!parrentPaddings ? 
        SCREEN_WIDTH - parrentPaddings : 
        SCREEN_WIDTH, 
    [parrentPaddings])

    const handleTouchStart = (event) => {
        const {locationX} = event.nativeEvent.changedTouches[0];
        setCirclePosition(locationX);
    }

    const handleTouchMove = (event) => {
        const {locationX} = event.nativeEvent.changedTouches[0];
        setCirclePosition(locationX);
    }

    const handleTouchEnd = (event) => {
        const {locationX} = event.nativeEvent.changedTouches[0];
        setCirclePosition(locationX - 8);
    }

    useEffect(() => {
        const updatedPosition = percentsToPX(valueToPercents(value, max), trackWidth);
        setCirclePosition(updatedPosition);
    }, [value])

    return (
        <View 
            style={trackbarStyle.container}
            ref={trackBar}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <View style={trackbarStyle.track}>
                <View style={[trackbarStyle.trackValue, {width: `${valueToPercents(value, max)}%`}]} />
            </View>
            <View 
                style={[trackbarStyle.circle, {transform: [{translateX: circlePosition}]}]} 
               
            />
        </View>
    )
}