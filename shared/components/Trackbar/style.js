import {StyleSheet} from "react-native";

export const trackbarStyle = StyleSheet.create({
    container: {
        height: 16,
        position: 'relative',
        justifyContent: 'center'
    },

    circle: {
        width: 16,
        height: 16,
        backgroundColor: '#fff',
        borderRadius: 100,
        position: 'absolute',
        top: 0,
        left: 0
    },

    track: {
        height: 4,
        backgroundColor: '#495057'
    },

    trackValue: {
        height: 4,
        backgroundColor: '#fff'
    }
})