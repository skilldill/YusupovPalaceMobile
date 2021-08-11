import React, { useCallback, useEffect, useState } from "react";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";

import {Tabs, Tab, TabIcon} from "../core/components";
import { Onboarding } from "../screens/Onboarding/Onboarding";
import { RoomsNavigator } from "./RoomsNavigator";
import {STORAGE_KEYS} from "../shared/constants";
import { View } from "react-native";
import { Loader } from "../shared/components";

const TabNavigation = () => (
    <Tabs>
        <Tab 
            name="full_list"
            icon={<TabIcon.Default iconSrc={require('../assets/icon-24-list.png')} title="Комнаты" />}
            iconActive={<TabIcon.Active iconSrc={require('../assets/icon-24-list-active.png')} title="Комнаты" />}
        >
            <RoomsNavigator />
        </Tab>

        <Tab 
            name="chosen_list"
            icon={<TabIcon.Default iconSrc={require('../assets/icon-24-like.png')} title="Понравилось" />}
            iconActive={<TabIcon.Active iconSrc={require('../assets/icon-24-like-active.png')} title="Понравилось" />}
        >
            <RoomsNavigator liked />
        </Tab>
    </Tabs>
)

export const Navigation = () => {
    const [screen, setScreen] = useState(null);
    const watchedOnboardingStorage = useAsyncStorage(STORAGE_KEYS.watchedOnboarding);

    const getWatchedOnboarding = async () => {
        try {
            const data = await watchedOnboardingStorage.getItem();
            const isWatched = JSON.parse(data);

            if (!!isWatched) {
                setScreen(<TabNavigation />);
            } else {
                setScreen(<Onboarding onStart={() => setScreen(<TabNavigation />)} />);
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWatchedOnboarding();
    }, [])

    return !!screen ? 
        screen : (
            <View style={{flex: 1, backgroundColor: '#050506'}}>
                <Loader />
            </View>
        )
}