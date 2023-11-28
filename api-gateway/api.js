import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const endpointApiGoogle = "https://www.googleapis.com/books/v1/volumes"

export const apiGoogle = axios.create({
    baseURL: endpointApiGoogle,
    params: {
        key: process.env.KEY_GOOGLE_API,
    },
});

export const endpointApiComment = "http://localhost:3500/comment"

export const apiComment = axios.create({
    baseURL: endpointApiComment
});
