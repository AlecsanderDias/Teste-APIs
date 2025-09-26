import { prisma } from '../../prisma/prisma.js';

export class UserService {
    async getUsers() {
        return prisma.user.findMany();
    }

    async getUserById(id) {
        return prisma.user.findunique({where: {id}});
    }

    async createUser(data) {
        return prisma.user.create({data});
    }

    async updateUserById(id, data) {
        return prisma.user.update({where: {id}, data});
    }

    async deleteUserById(id) {
        return prisma.user.delete({where: {id}});
    }
}