import { service } from './Services/services.js';

export const userCalls = {
    GetUser: async function(call, callback) {
        const { id } = call.request;
        const result = await service.userService.getUserById(id);
        callback(null, result);
    },
    GetUsers: async function(_, callback) {
        const users = await service.userService.getUsers();
        callback(null, {users});
    },
    CreateUser: async function (call, callback) {
        const data = { ...call.request};
        const user = await service.userService.createUser(data);
        callback(null, user);
    },
    UpdateUser: async function(call, callback) {
        const data = { ...call.request};
        for(var prop in data) {
            if(prop[0] == "_") delete data[`${prop}`];
        }
        const user = await service.userService.updateUserById(data.id, data);
        callback(null, user);
    },
    DeleteUser: async function(call, callback) {
        const { id } = call.request;
        // console.log("Delete =>", id);
        const result = await service.userService.deleteUserById(id);
        callback(null, result);
    }
};