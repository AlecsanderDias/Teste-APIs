export class UserService {
    _prisma;

    constructor(database) {
        this._prisma = database;
    }

    get prisma() {
        return this._prisma;
    }

    async getUsers() {
        return await this.prisma.users.findMany();
    }

    async getUserById(id) {
        return await this.prisma.users.findUnique({ where: {id: id} });
    }

    async createUser(data) {
        return await this.prisma.users.create({data: data});
    }

    async updateUserById(id, data) {
        delete data.id;
        return await this.prisma.users.update({where: {id: id}, data: data});
    }

    async deleteUserById(id) {
        return await this.prisma.users.delete({where: {id:id}});
    }
}