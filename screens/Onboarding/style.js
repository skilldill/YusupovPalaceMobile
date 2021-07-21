import {StyleSheet} from "react-native";

export const onboardingStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050506',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },

    buttonNext: {
        width: '80%',
        height: 48,
        borderRadius: 32,
        backgroundColor: '#4945FF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonNextText: {
        color: '#F8F9FA',
        fontSize: 18,
        fontWeight: '600'
    },

    circles: {
        marginVertical: 20,
        flexDirection: 'row'
    },

    circle: {
        width: 12,
        height: 12,
        borderRadius: 100,
        backgroundColor: '#495057',
        margin: 12
    },

    circleActive: {
        backgroundColor: '#F8F9FA'
    }
})