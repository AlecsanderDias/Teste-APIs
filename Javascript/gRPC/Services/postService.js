export class PostService {
    _prisma;
    
    constructor(database) {
        this._prisma = database;
    }

    get prisma() {
        return this._prisma;
    }

    async getPosts() {
        return await this.prisma.posts.findMany();
    }

    async getPostById(id) {
        return await this.prisma.posts.findUnique({ where: {id:id}});
    }

    async createPost(data) {
        return await this.prisma.posts.create({data: data});
    }

    async updatePostById(id, data) {
        return await this.prisma.posts.update({where: {id:id}, data:data});
    }

    async deletePostById(id) {
        return await this.prisma.posts.delete({where: {id:id}});
    }
}