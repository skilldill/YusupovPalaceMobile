import {StyleSheet} from "react-native";

export const audioPlayerStyle = StyleSheet.create({
    container: {
        flex: 1,
    },

    audioControl: {
        height: 64,
        backgroundColor: '#1A1A1F',
        borderBottomColor: '#050506',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16
    },

    controlInfo: {
        flex: 1,
        flexDirection: 'row',
    },

    controPreview: {
        width: 40,
        height: 40,
        borderRadius: 4,
        marginRight: 16
    },  

    controlPlayButton: {
        width: 32,
        height: 32,
        backgroundColor: '#fff',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    controlPlayButtonIcon: {
        transform: [{scale: 0.66}]
    },

    controlTitle: {
        color: '#F8F9FA',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 18,
        marginBottom: 4
    },

    controlSubtitle: {
        color: '#868E96',
        fontSize: 14,
        lineHeight: 16
    }
})