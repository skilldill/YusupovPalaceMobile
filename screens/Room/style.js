import {StyleSheet} from "react-native";

export const roomStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050506',
        paddingVertical: 16
    },

    title: {
        textAlign: 'center',
        color: '#F8F9FA',
        fontSize: 28,
        fontWeight: '600',
        lineHeight: 32,
        paddingHorizontal: 100,
        marginTop: 32
    },

    subTitle: {
        fontWeight: '600',
        fontSize: 18,
        color: '#868E96',
        textAlign: 'center',
        marginTop: 12
    },

    description: {
        fontSize: 18,
        color: '#F8F9FA',
        lineHeight: 28,
        marginTop: 24,
        marginHorizontal: 16
    },

    controlsBlock: {
        position: 'relative',
        height: 224
    },

    audioControl: {
        position: 'absolute',
        width: 48,
        height: 48,
        borderRadius: 100,
        backgroundColor: '#fff',
        top: 176,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    photoBlock: {
        paddingHorizontal: 8,
        position: 'relative',
    },

    photo: {
        height: 200,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },

    photoGradient: {
        position: 'absolute',
        top: 0, left: 8, right: 8, bottom: 0,
        opacity: 0.9,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    }
})