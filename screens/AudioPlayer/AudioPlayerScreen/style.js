import {StyleSheet} from "react-native";

export const audioPlayerScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050506',
        paddingHorizontal: 16,
    },

    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16
    },

    preview: {
        height: 300,
        borderRadius: 16,
        marginBottom: 32,
        marginTop: 16
    },

    title: {
        lineHeight: 28,
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 100,
        marginBottom: 8

    },

    subTitle: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '600',
        color: '#868E96',
        textAlign: 'center',
        marginBottom: 50
    },

    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    time: {
        fontSize: 18,
        lineHeight: 24,
        color: '#F8F9FA',
    },

    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 185,
        alignSelf: 'center',
        marginTop: 12
    },

    buttonCircle: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 100
    }
})