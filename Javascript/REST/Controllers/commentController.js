import { service } from "../Services/services.js";

export class CommentController {
    static getAllComments = async (req, res) => {
        try {
            const comments = await service.commentService.getComments();
            return res.status(200).json(comments);
        } catch (error) {
            // return res.status(500).json({error: error});
            throw new Error(error);
        }
    }
    static findCommentById = async (req, res) => {
        const { id } = req.params;
        try {
            const comment = await service.commentService.getCommentById(parseInt(id));
            return res.status(200).json(comment);
        } catch (error) {
            throw new Error(error);
        }
    }

    static createComment = async (req, res) => { 
        const data = req.body;
        try {
            const comment = await service.commentService.createComment(data);
            return res.status(200).json(comment);
        } catch (error) {
            throw new Error(error);
        }
    }

    static updateCommentById = async (req, res) => {
        const { id } = req.params;
        try {
            const comment = await service.commentService.updateCommentById(parseInt(id), req.body);
            return res.status(200).json(comment);
        } catch (error) {
            throw new Error(error);
        }
    }

    static deleteCommentById = async (req, res) => {
        const { id } = req.body;
        try {
            const comment = await service.commentService.deleteCommentById(parseInt(id));
            return res.status(200).json(comment);
        } catch (error) {
            throw new Error(error);
        }
    }
}