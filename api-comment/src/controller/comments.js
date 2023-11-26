import * as commentService from "../database/services/Comments.js";

const verifyFields = (obj) => {
    Object.keys(obj).forEach((item) => {
        if (!obj[item]) {
            throw new Error(`Field ${item} is required`);
        }
    });
};

export const getByBook = async (req, res) => {
    const { idBook } = req.query;
    if (!idBook) throw new Error("Book is required");
    const comments = await commentService.getByBook({ idBook });
    res.json(comments);
};

export const getById = async (req, res) => {
    const { id } = req.params;
    const comment = await commentService.getById({ id });
    res.json(comment);
};

export const create = async (req, res) => {
    const { idBook, comment } = req.body;
    const objComment = { idBook, comment };
    verifyFields(objComment);

    const newComment = await commentService.create(objComment);
    res.status(201).json(newComment);
};

export const putUpdate = async (req, res) => {
    const { id } = req.params;
    const { idBook, comment } = req.body;
    const objComment = { idBook, comment };

    if (!id) throw new Error("Id is required");
    verifyFields(objComment);

    const newComment = await commentService.update({ id, ...objComment });
    res.status(201).json(newComment);
};

export const patchUpdate = async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error("Id is required");

    const newComment = await commentService.update({ id, ...req.body });
    res.status(201).json(newComment);
};

export const destroy = async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error("Id is required");

    await commentService.destroy({ id });
    res.status(203).send("Success");
};
