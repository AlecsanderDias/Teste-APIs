export class LikeService {
    _prisma;
    
    constructor(database) {
        this._prisma = database;
    }

    get prisma() {
        return this._prisma;
    }

    async getLikes() {
        return await this.prisma.likes.findMany();
    }

    async getLikeById(id) {
        return await this.prisma.likes.findUnique({ where: {id}});
    }

    async createLike(data) {
        return await this.prisma.likes.create({data});
    }

    async updateLikeById(id, data) {
        return await this.prisma.likes.update({where: {id}, data});
    }

    async deleteLikeById(id) {
        return await this.prisma.likes.delete({where: {id}});
    }
}