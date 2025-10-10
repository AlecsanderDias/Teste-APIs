import { UserService } from "./userService.js";
import { CommentService } from "./commentService.js";
import { PostService } from "./postService.js";
import { FollowService } from "./followService.js";
import { LikeService } from "./likeService.js";
import { prisma } from '../../prisma/prisma.js';

class Service {
    _userService;
    _postService;
    _commentService;
    _likeService;
    _followService;
    
    constructor(database) {
        this._userService = new UserService(database);
        this._postService = new PostService(database);
        this._commentService = new CommentService(database);
        this._followService = new FollowService(database);
        this._likeService = new LikeService(database);
    }

    get userService() {
        return this._userService;
    }

    get postService() {
        return this._postService;
    }
    
    get commentService() {
        return this._commentService;
    }
    
    get likeService() {
        return this._likeService;
    }
    
    get followService() {
        return this._followService;
    }
}

export const service = new Service(prisma); 