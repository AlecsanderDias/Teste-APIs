import { Router } from "express";
import { LikeController } from "../Controllers/likeController.js";

const likeRouter = new Router();

likeRouter
    .get('/like', LikeController.getAllLikes)
    .get('/like/:id', LikeController.findLikeById)
    .post('/like', LikeController.createLike)
    .post('/like/:id', LikeController.updateLikeById)
    .delete('/like/:id', LikeController.deleteLikeById)

export { likeRouter };