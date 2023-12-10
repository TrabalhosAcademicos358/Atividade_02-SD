import axios from "axios";

export const endpointApiGoogle = "https://www.googleapis.com/books/v1/volumes"

export const apiGoogle = axios.create({
    baseURL: endpointApiGoogle,
});

export const endpointApiComment = "http://localhost:3500"

export const apiComment = axios.create({
    baseURL: `${endpointApiComment}/comment`
});
