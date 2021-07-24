import {API_URLS} from "../constants";

export const getFullImageUrl = (path) => {
    return `${API_URLS.base}${path}`;
}

export const prepareDescription = (description) => {
    try {

        return description.replace(/\n/g, ' ').replaceAll(/\s{1,}/g, ' ');
    } catch(error) {
        console.log(error);
        return description;
    }
};