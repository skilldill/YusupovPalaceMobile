import { API_URLS } from "../constants";
import {http} from "./http";

export class ApiService {
    static getRooms() {
        return http.get(API_URLS.rooms);
    }

    static getRoom(id) {
        const url = API_URLS.rooms.replace(':id', id);
        return http.get(url);
    }
}