import React from "react";
import {Text} from "react-native";

import {Tabs, Tab} from "../core/components";

export const Navigation = () => {
    return (
        <Tabs>
            <Tab 
                name="full_list"
                icon={<Text>Залы</Text>}
                iconActive={<Text>ЗАЛЫ</Text>}
            >
                <Text>123</Text>
            </Tab>

            <Tab 
                name="chosen_list"
                icon={<Text>Выбранные залы</Text>}
                iconActive={<Text>ВЫБРАННЫЕ ЗАЛЫ</Text>}
            >
                
            </Tab>
        </Tabs>
    )
}