import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {navbarStyle} from "./style";
import {Rooms, Room} from "../screens";
import { Image } from "react-native";

const Stack = createStackNavigator();

const getOptions = (title) => {
    const options = {
        title,
        headerBackTitleVisible: false,
        headerBackImage: () => <Image style={{marginLeft: 12}} source={require('../assets/icon-back.png')} />,
        ...navbarStyle
    }

    console.log(options);

    return options;
}

export const RoomsNavigator = ({liked}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Rooms" options={liked ? getOptions('Понравилось') : getOptions('Комнаты')}>
                    {(props) => <Rooms {...props} liked={liked} />}
                </Stack.Screen>

                <Stack.Screen name="Room" component={Room} options={getOptions('')} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}