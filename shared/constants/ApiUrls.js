import {API_BASE_URL} from '../../env';

console.log(API_BASE_URL);

export const API_URLS = {
    base: API_BASE_URL,
    rooms: '/rooms',
    room: '/room/:id'
}