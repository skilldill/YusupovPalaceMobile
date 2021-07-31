import React from "react";
import { Image, Platform } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {navbarStyle} from "./style";
import {Rooms, Room, AudioPlayer} from "../screens";

const Stack = createStackNavigator();

const getOptions = (title) => {
    const options = {
        title,
        headerBackTitleVisible: false,
        headerBackImage: () => <Image style={{marginLeft: 12}} source={require('../assets/icon-back.png')} />,
        ...navbarStyle
    }

    return options;
}

const getRoomOptions = () => {
    const commonOptions = getOptions('');
    const options = {
        ...commonOptions,
        headerTitleStyle: {
            color: '#F8F9FA',
            fontSize: 18, 
            fontWeight: '600', 
            paddingVertical: 12,
            alignSelf: 'center',
            transform: [{ translateX: Platform.OS === 'ios' ? 0 : -30 }]
        },
    }

    return options;
}

export const RoomsNavigator = ({liked}) => {
    return (
        <AudioPlayer>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Rooms" options={liked ? getOptions('Понравилось') : getOptions('Комнаты')}>
                        {(props) => <Rooms {...props} liked={liked} />}
                    </Stack.Screen>

                    <Stack.Screen name="Room" component={Room} options={getRoomOptions()} />
                </Stack.Navigator>
            </NavigationContainer>
        </AudioPlayer>
    )
}