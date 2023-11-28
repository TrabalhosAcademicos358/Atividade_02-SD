import express from "express";
import { apiGoogle, apiComment } from "./api.js";

const router = express.Router();

/**
 * @swagger
 * /livros:
 *  get:
 *    description: Retorna todos os livros pelo titulo
 *    responses:
 *      200:
 *        description: Uma lista de livros
 */
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

/**
 * @swagger
 * /livros/:id:
 *  get:
 *    description: Retorna os dados do livro + comentários pelo id
 *    responses:
 *      200:
 *        description: Uma estrutura de dados com as informações do livro e comentários
 */
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
