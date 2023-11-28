import express from "express";
import { apiGoogle, apiComment } from "./api.js";

const router = express.Router();

router.get("/livros", async (req, res) => {
    const searchBook = req.query.q;
    if (!searchBook) throw new Error("Book title is required");

    const { authorization } = req.headers;
    if (!authorization) throw new Error("Authorization is required");

    const response = await apiGoogle.get(`?q=${searchBook}+intitle`, {
        headers: { Authorization: authorization },
    });
    res.json(response.data);
});

router.get("/livros/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error("Id is required");

    const { authorization } = req.headers;
    if (!authorization) throw new Error("Authorization is required");

    const responseGoogle = await apiGoogle.get(`/${id}`, {
        headers: { Authorization: authorization },
    });
    const responseComment = await apiComment.get(`?idBook=${id}`);

    const response = {
        ...responseGoogle.data,
        layerInfo: undefined,
        saleInfo: undefined,
        comments: responseComment.data,
    };

    res.json(response);
});

export default router;
