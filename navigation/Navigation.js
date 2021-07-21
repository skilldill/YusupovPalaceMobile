import React from "react";

import {Tabs, Tab, TabIcon} from "../core/components";
import {LikedRooms, Rooms} from "../screens";
import { Onboarding } from "../screens/Onboarding/Onboarding";

export const Navigation = () => {
    return <Onboarding />

    return (
        <Tabs>
            <Tab 
                name="full_list"
                icon={<TabIcon.Default iconSrc={require('../assets/icon-24-list.png')} title="Комнаты" />}
                iconActive={<TabIcon.Active iconSrc={require('../assets/icon-24-list-active.png')} title="Комнаты" />}
            >
                <Rooms />
            </Tab>

            <Tab 
                name="chosen_list"
                icon={<TabIcon.Default iconSrc={require('../assets/icon-24-like.png')} title="Понравилось" />}
                iconActive={<TabIcon.Active iconSrc={require('../assets/icon-24-like-active.png')} title="Понравилось" />}
            >
                <LikedRooms />
            </Tab>
        </Tabs>
    )
}