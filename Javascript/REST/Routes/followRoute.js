import { Router } from "express";
import { FollowController } from "../Controllers/followController.js";

const followRouter = new Router();

followRouter
    .get('/follow', FollowController.getAllFollows)
    .get('/follow/:id', FollowController.findFollowById)
    .post('/follow', FollowController.createFollow)
    .post('/follow/:id', FollowController.updateFollowById)
    .delete('/follow/:id', FollowController.deleteFollowById)

export { followRouter };