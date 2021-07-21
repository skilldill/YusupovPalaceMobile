import React, { useCallback, useState } from "react";
import { ApiService } from "../../../shared/api";
import { RoomsContext } from "./RoomsContext";

export const RoomsProvider = ({children}) => {
    const [rooms, setRooms] = useState([]);

    const fetchRooms = useCallback(async () => {
        try {
            const {data} = await ApiService.getRooms();
            setRooms(data);
        } catch(error) {
            console.log(error);
        }
    }, [])

    const values = {
        rooms,
        fetchRooms
    }

    return (
        <RoomsContext.Provider value={values}>
            {children}
        </RoomsContext.Provider>
    )
}