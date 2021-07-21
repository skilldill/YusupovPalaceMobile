import {useContext, useEffect} from "react";

import {RoomsContext} from "./RoomsContext";

export const RoomsService = () => {
    const {rooms, fetchRooms, likedIds, likeRoom} = useContext(RoomsContext);
    return {rooms, fetchRooms,likedIds, likeRoom};
}