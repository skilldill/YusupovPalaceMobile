import axios from "axios";
import {API_URLS} from "../constants";

export const http = axios.create({
    baseURL: API_URLS.base
})