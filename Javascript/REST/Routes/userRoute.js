import { Router } from "express";
import { UserController } from "../Controllers/userController.js";

const userRouter = new Router();

userRouter
    .get('/user', UserController.getAllUsers)
    .get('/user/:id', UserController.findUserById)
    .post('/user', UserController.createUser)
    .post('/user/:id', UserController.updateUserById)
    .delete('/user/:id', UserController.deleteUserById)

export { userRouter };