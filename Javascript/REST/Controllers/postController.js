import { service } from "../Services/services.js";

export class PostController {
    static getAllPosts = async (req, res) => {
        try {
            const posts = await service.postService.getPosts();
            return res.status(200).json(posts);
        } catch (error) {
            // return res.status(500).json({error: error});
            throw new Error(error);
        }
    }
    static findPostById = async (req, res) => {
        const { id } = req.params;
        try {
            const post = await service.postService.getPostById(parseInt(id));
            return res.status(200).json(post);
        } catch (error) {
            throw new Error(error);
        }
    }

    static createPost = async (req, res) => { 
        const data = req.body;
        try {
            const post = await service.postService.createPost(data);
            return res.status(200).json(post);
        } catch (error) {
            throw new Error(error);
        }
    }

    static updatePostById = async (req, res) => {
        const { id } = req.params;
        try {
            const post = await service.postService.posttePostById(parseInt(id), req.body);
            return res.status(200).json(post);
        } catch (error) {
            throw new Error(error);
        }
    }

    static deletePostById = async (req, res) => {
        const { id } = req.body;
        try {
            const post = await service.postService.deletePostById(parseInt(id));
            return res.status(200).json(post);
        } catch (error) {
            throw new Error(error);
        }
    }
}