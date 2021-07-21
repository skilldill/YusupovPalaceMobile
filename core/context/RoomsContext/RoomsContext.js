import {createContext} from "react";

export const RoomsContext = createContext({
    rooms: [],
    likedIds: [],
    fetchRooms: () => {},
    likeRoom: (id) => {}
})