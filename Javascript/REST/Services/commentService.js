export class CommentService {
    _prisma;
    
    constructor(database) {
        this._prisma = database;
    }

    get prisma() {
        return this._prisma;
    }

    async getComments() {
        return await this.prisma.comments.findMany();
    }

    async getCommentById(id) {
        return await this.prisma.comments.findUnique({ where: {id}});
    }

    async createComment(data) {
        return await this.prisma.comments.create({data});
    }

    async updateCommentById(id, data) {
        return await this.prisma.comments.update({where: {id}, data});
    }

    async deleteCommentById(id) {
        return await this.prisma.comments.delete({where: {id}});
    }
}