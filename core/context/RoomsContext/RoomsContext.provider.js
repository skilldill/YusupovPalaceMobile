import React, { useCallback, useEffect, useState } from "react";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";

import { ApiService } from "../../../shared/api";
import { RoomsContext } from "./RoomsContext";
import {STORAGE_KEYS} from "../../../shared/constants";

export const RoomsProvider = ({children}) => {
    const [rooms, setRooms] = useState([]);
    const [likedIds, setLikedIds] = useState([]);

    const likedRoomsStorage = useAsyncStorage(STORAGE_KEYS.likedIds);

    const likeRoom = useCallback((id) => {
        if (likedIds.includes(id)) {
            const filterdLikedIds = likedIds.filter((likedId) => likedId !== id);
            setLikedIds(filterdLikedIds);
        } else {
            setLikedIds([...likedIds, id]);
        }
    }, [likedIds])

    const fetchLikedIds = async () => {
        try {
            const data = await likedRoomsStorage.getItem();
            console.log(data);
            if (!data || data.length === 0) {
                await likedRoomsStorage.setItem(JSON.stringify([]));
                return;
            }

            setLikedIds(JSON.parse(data));

        } catch(error) {
            console.log(error);
        }
    }

    const updateLikedIds = async (likedIds) => {
        try {
            await likedRoomsStorage.setItem(JSON.stringify(likedIds));
        } catch(error) {
            console.log(error);
        }
    }

    const fetchRooms = useCallback(async () => {
        try {
            const {data} = await ApiService.getRooms();
            setRooms(data);
        } catch(error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        fetchLikedIds();
    }, [])

    useEffect(() => {
        updateLikedIds(likedIds);
    }, [likedIds])

    const values = {
        rooms,
        likedIds,
        fetchRooms,
        likeRoom
    }

    return (
        <RoomsContext.Provider value={values}>
            {children}
        </RoomsContext.Provider>
    )
}