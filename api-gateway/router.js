import express from "express";
import { apiGoogle, apiComment } from "./api";

const router = express.Router();

router.get("/livros", async (req, res) => {
    const searchBook = req.query.q;
    if (!searchBook) throw new Error("Book title is required");
    const response = await apiGoogle.get(`?q=${searchBook}+intitle`);
    res.json(response.data);
});

router.get("/livros/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error("Id is required");
    const responseGoogle = await apiGoogle.get(`/${id}`);
    const responseComment = apiComment.get(`?book=${id}`);
    res.json({ ...responseGoogle.data, comments: responseComment.data });
});

export default router;
