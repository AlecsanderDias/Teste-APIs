import { service } from '../Services/services.js';

export const commentCalls = {
    GetComment: async function(call, callback) {
        const { id } = call.request;
        const result = await service.commentService.getCommentById(id);
        callback(null, result);
    },
    GetComments: async function(_, callback) {
        const comments = await service.commentService.getComments();
        callback(null, {comments});
    },
    CreateComment: async function (call, callback) {
        const data = { ...call.request};
        const comment = await service.commentService.createComment(data);
        callback(null, comment);
    },
    UpdateComment: async function(call, callback) {
        const data = { ...call.request};
        for(var prop in data) {
            if(prop[0] == "_") delete data[`${prop}`];
        }
        const comment = await service.commentService.updateCommentById(data.id, data);
        callback(null, comment);
    },
    DeleteComment: async function(call, callback) {
        const { id } = call.request;
        const result = await service.commentService.deleteCommentById(id);
        callback(null, result);
    }
};