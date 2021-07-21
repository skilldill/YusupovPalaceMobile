import {useContext, useEffect} from "react";

import {RoomsContext} from "./RoomsContext";

export const RoomsService = () => {
    const {rooms, fetchRooms} = useContext(RoomsContext);

    useEffect(() => {
        if (rooms.length === 0) {
            fetchRooms();
        }
    } ,[rooms])

    return {rooms, fetchRooms};
}