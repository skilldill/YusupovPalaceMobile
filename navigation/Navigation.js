import React, { useCallback, useEffect, useState } from "react";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";

import {Tabs, Tab, TabIcon} from "../core/components";
import { Onboarding } from "../screens/Onboarding/Onboarding";
import { RoomsNavigator } from "./RoomsNavigator";
import {STORAGE_KEYS} from "../shared/constants";

export const Navigation = () => {
    const [started, setStarted] = useState(false);
    const watchedOnboardingStorage = useAsyncStorage(STORAGE_KEYS.watchedOnboarding);

    const getWatchedOnboarding = async () => {
        try {
            const data = await watchedOnboardingStorage.getItem();
            const isWatched = JSON.parse(data);

            setStarted(isWatched);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWatchedOnboarding();
    }, [])

    const handleStart = useCallback(() => {
        setStarted(true);
    }, [])

    return started ? (
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
    ) : <Onboarding onStart={handleStart}/>
}