import axios from "axios";

export const backendURL = "https://rickandmortyapi.com/api";
export const catBackendURL = "https://onepayuat.agdbank.com:89";
export const questionURL = "http://localhost:1337/";
export const baseURL = axios.create({
    baseURL: backendURL,
});
export const catBaseURL = axios.create({
    baseURL: catBackendURL,
});
export const quesBaseURL = axios.create({
    baseURL: questionURL,
});
