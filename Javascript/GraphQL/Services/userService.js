import { prisma } from '../../prisma/prisma.js';

export class UserService {
    async getUsers() {
        return await prisma.users.findMany();
    }

    async getUserById(id) {
        return await prisma.users.findUnique({where: {id}});
    }

    async createUser(data) {
        return await prisma.users.create({data});
    }

    async updateUserById(id, data) {
        return await prisma.users.update({where: {id}, data});
    }

    async deleteUserById(id) {
        return await prisma.users.delete({where: {id}});
    }
}