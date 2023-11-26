import express from "express";
import * as commentController from "./controller/comments.js";

const router = express.Router();

router
    .route("/comment")
    .get(commentController.getByBook)
    .post(commentController.create);

router
    .route("/comment/:id")
    .get(commentController.getById)
    .put(commentController.putUpdate)
    .patch(commentController.patchUpdate)
    .delete(commentController.destroy);

export default router;
