import {StyleSheet} from "react-native";

export const roomCardStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 302,
        borderRadius: 16,
        backgroundColor: '#1A1A1F',
        overflow: 'hidden',
        marginBottom: 16
    },

    preview: {
        height: 180,
        width: '100%'
    },

    info: {
        padding: 16
    },

    title: {
        fontWeight: '600',
        fontSize: 22,
        color: '#F8F9FA',
        marginBottom: 4
    },

    subtitle: {
        fontWeight: '600',
        fontSize: 18,
        color: '#868E96',
    },

    like: {
        position: 'absolute',
        bottom: 16,
        left: 16
    }
})