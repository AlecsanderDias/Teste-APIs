import { service } from '../Services/services.js';

export const postCalls = {
    GetPost: async function(call, callback) {
        const { id } = call.request;
        const result = await service.postService.getPostById(id);
        callback(null, result);
    },
    GetPosts: async function(_, callback) {
        const posts = await service.postService.getPosts();
        callback(null, {posts});
    },
    CreatePost: async function (call, callback) {
        const data = { ...call.request};
        const post = await service.postService.createPost(data);
        callback(null, post);
    },
    UpdatePost: async function(call, callback) {
        const data = { ...call.request};
        for(var prop in data) {
            if(prop[0] == "_") delete data[`${prop}`];
        }
        const post = await service.postService.updatePostById(data.id, data);
        callback(null, post);
    },
    DeletePost: async function(call, callback) {
        const { id } = call.request;
        const result = await service.postService.deletePostById(id);
        callback(null, result);
    }
};