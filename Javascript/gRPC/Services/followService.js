export class FollowService {
    _prisma;
    
    constructor(database) {
        this._prisma = database;
    }

    get prisma() {
        return this._prisma;
    }

    async getFollows() {
        return await this.prisma.follows.findMany();
    }

    async getFollowById(id) {
        return await this.prisma.follows.findUnique({ where: {id}});
    }

    async createFollow(data) {
        return await this.prisma.follows.create({data: data});
    }

    async updateFollowById(id, data) {
        return await this.prisma.follows.update({where: {id:id}, data:data});
    }

    async deleteFollowById(id) {
        return await this.prisma.follows.delete({where: {id:id}});
    }
}