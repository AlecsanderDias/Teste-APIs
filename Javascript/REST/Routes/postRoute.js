import { Router } from "express";
import { PostController } from "../Controllers/postController.js";

const postRouter = new Router();

postRouter
    .get('/post', PostController.getAllPosts)
    .get('/post/:id', PostController.findPostById)
    .post('/post', PostController.createPost)
    .post('/post/:id', PostController.updatePostById)
    .delete('/post/:id', PostController.deletePostById)

export { postRouter };