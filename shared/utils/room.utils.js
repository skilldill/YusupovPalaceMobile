import {API_URLS} from "../constants";

export const getFullImageUrl = (path) => {
    return `${API_URLS.base}${path}`;
}