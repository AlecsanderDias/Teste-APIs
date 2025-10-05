import express from "express";
import cors from "cors";
import { userRouter } from "./userRoute.js";
import { postRouter } from "./postRoute.js";
import { followRouter } from "./followRoute.js";
import { commentRouter } from "./commentRoute.js";
import { likeRouter } from "./likeRoute.js";

export const routes = (app) => {
    app.use(express.json(), cors({origin: "*"}), userRouter, postRouter, followRouter, commentRouter, likeRouter);
};