import { Router } from "express";
import { CommentController } from "../Controllers/commentController.js";

const commentRouter = new Router();

commentRouter
    .get('/comment', CommentController.getAllComments)
    .get('/comment/:id', CommentController.findCommentById)
    .post('/comment', CommentController.createComment)
    .post('/comment/:id', CommentController.updateCommentById)
    .delete('/comment/:id', CommentController.deleteCommentById)

export { commentRouter };