import { service } from "../Services/services.js";

export class FollowController {
    static getAllFollows = async (req, res) => {
        try {
            const follows = await service.followService.getFollows();
            return res.status(200).json(follows);
        } catch (error) {
            // return res.status(500).json({error: error});
            throw new Error(error);
        }
    }
    static findFollowById = async (req, res) => {
        const { id } = req.params;
        try {
            const follow = await service.followService.getFollowById(parseInt(id));
            return res.status(200).json(follow);
        } catch (error) {
            throw new Error(error);
        }
    }

    static createFollow = async (req, res) => { 
        const data = req.body;
        try {
            const follow = await service.followService.createFollow(data);
            return res.status(200).json(follow);
        } catch (error) {
            throw new Error(error);
        }
    }

    static updateFollowById = async (req, res) => {
        const { id } = req.params;
        try {
            const follow = await service.followService.updateFollowById(parseInt(id), req.body);
            return res.status(200).json(follow);
        } catch (error) {
            throw new Error(error);
        }
    }

    static deleteFollowById = async (req, res) => {
        const { id } = req.body;
        try {
            const follow = await service.followService.deleteFollowById(parseInt(id));
            return res.status(200).json(follow);
        } catch (error) {
            throw new Error(error);
        }
    }
}