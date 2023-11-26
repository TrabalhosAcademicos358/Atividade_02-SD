import Comments from "../model/Comments.js";

export const getByBook = ({ idBook }) => {
    const commentsBook = Comments.findAll({ where: { idBook } });
    return commentsBook;
};

export const getById = ({ id }) => {
    const commentsBook = Comments.findOne({ where: { id } });
    return commentsBook;
};

export const create = ({ idBook, comment }) => {
    const newComment = Comments.create({ idBook, comment });
    return newComment;
};

export const update = ({ id, idBook, comment }) => {
    let update = {};

    const commentBefore = getById({ id });
    if (!commentBefore) {
        throw new Error("Comment not exists");
    }

    if (idBook) update.idBook = idBook;
    if (comment) update.comment = comment;

    const newComment = Comments.update(update, { where: { id } });
    return newComment;
};

export const destroy = ({ id }) => {
    return Comments.destroy({ where: { id } });
};
