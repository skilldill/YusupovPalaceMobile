import React from "react";
import {View, Text} from "react-native";

import {Tabs, Tab, TabIcon} from "../core/components";

export const Navigation = () => {
    return (
        <Tabs>
            <Tab 
                name="full_list"
                icon={<TabIcon.Default iconSrc={require('../assets/icon-24-list.png')} title="Комнаты" />}
                iconActive={<TabIcon.Active iconSrc={require('../assets/icon-24-list-active.png')} title="Комнаты" />}
            >
                <Text>123</Text>
            </Tab>

            <Tab 
                name="chosen_list"
                icon={<TabIcon.Default iconSrc={require('../assets/icon-24-like.png')} title="Понравилось" />}
                iconActive={<TabIcon.Active iconSrc={require('../assets/icon-24-like-active.png')} title="Понравилось" />}
            >
                
            </Tab>
        </Tabs>
    )
}