import { service } from '../Services/services.js';

export const followCalls = {
    GetFollow: async function(call, callback) {
        const { id } = call.request;
        const result = await service.followService.getFollowById(id);
        callback(null, result);
    },
    GetFollows: async function(_, callback) {
        const follows = await service.followService.getFollows();
        callback(null, {follows});
    },
    CreateFollow: async function (call, callback) {
        const data = { ...call.request};
        const follow = await service.followService.createFollow(data);
        callback(null, follow);
    },
    UpdateFollow: async function(call, callback) {
        const data = { ...call.request};
        for(var prop in data) {
            if(prop[0] == "_") delete data[`${prop}`];
        }
        const follow = await service.followService.updateFollowById(data.id, data);
        callback(null, follow);
    },
    DeleteFollow: async function(call, callback) {
        const { id } = call.request;
        const result = await service.followService.deleteFollowById(id);
        callback(null, result);
    }
};