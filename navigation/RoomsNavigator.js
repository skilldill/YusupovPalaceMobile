import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {Rooms, Room} from "../screens";

const Stack = createStackNavigator();

export const RoomsNavigator = ({liked}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Rooms">
                    {(props) => <Rooms {...props} liked={liked} />}
                </Stack.Screen>
                
                <Stack.Screen name="Room" component={Room} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}