import { service } from '../Services/services.js';

export const likeCalls = {
    GetLike: async function(call, callback) {
        const { id } = call.request;
        const result = await service.likeService.getLikeById(id);
        callback(null, result);
    },
    GetLikes: async function(_, callback) {
        const likes = await service.likeService.getLikes();
        callback(null, {likes});
    },
    CreateLike: async function (call, callback) {
        const data = { ...call.request};
        const like = await service.likeService.createLike(data);
        callback(null, like);
    },
    UpdateLike: async function(call, callback) {
        const data = { ...call.request};
        for(var prop in data) {
            if(prop[0] == "_") delete data[`${prop}`];
        }
        const like = await service.likeService.updateLikeById(data.id, data);
        callback(null, like);
    },
    DeleteLike: async function(call, callback) {
        const { id } = call.request;
        const result = await service.likeService.deleteLikeById(id);
        callback(null, result);
    }
};