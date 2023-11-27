import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const apiGoogle = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
    params: {
        key: process.env.KEY_GOOGLE_API,
    },
});

export const apiComment = axios.create({
    baseURL: "http://localhost:3500/comment"
});
