import {StyleSheet} from "react-native";

export const tabsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#050506'
    },

    tabbar: {
        backgroundColor: '#1A1A1F',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 48
    },

    tabitem: {
        
    },

    tabIcon: {
        alignItems: 'center',
        paddingVertical: 4
    },

    tabIconText: {
        fontSize: 10,
        color: '#868E96'
    },

    tabIconActive: {
        
    },

    tabIconTextActive: {
        color: '#fff'
    }
})