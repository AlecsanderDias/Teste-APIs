import { service } from "../Services/services.js";

export class LikeController {
    static getAllLikes = async (req, res) => {
        try {
            const likes = await service.likeService.getLikes();
            return res.status(200).json(likes);
        } catch (error) {
            // return res.status(500).json({error: error});
            throw new Error(error);
        }
    }
    static findLikeById = async (req, res) => {
        const { id } = req.params;
        try {
            const like = await service.likeService.getLikeById(parseInt(id));
            return res.status(200).json(like);
        } catch (error) {
            throw new Error(error);
        }
    }

    static createLike = async (req, res) => { 
        const data = req.body;
        try {
            const like = await service.likeService.createLike(data);
            return res.status(200).json(like);
        } catch (error) {
            throw new Error(error);
        }
    }

    static updateLikeById = async (req, res) => {
        const { id } = req.params;
        try {
            const like = await service.likeService.updateLikeById(parseInt(id), req.body);
            return res.status(200).json(like);
        } catch (error) {
            throw new Error(error);
        }
    }

    static deleteLikeById = async (req, res) => {
        const { id } = req.body;
        try {
            const like = await service.likeService.deleteLikeById(parseInt(id));
            return res.status(200).json(like);
        } catch (error) {
            throw new Error(error);
        }
    }
}