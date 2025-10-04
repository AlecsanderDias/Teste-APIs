// import { UserService } from "./Services/userService.js";
// const userService = new UserService();

import { service } from "./Services/services.js";

export const resolvers = {
  Query: {
    teste: (parent, {value}) => value + 1,
    user: (parent, args) => service.userService.getUserById(args.id),
    users: () => service.userService.getUsers(),
    post: (parent, args) => service.postService.getPostById(args.id),
    posts: () => service.postService.getPosts(),
    comment: (parent, args) => service.commentService.getCommentById(args.id),
    comments: () => service.commentService.getComments(),
    like: (parent, args) => service.likeService.getLikeById(args.id),
    likes: () => service.likeService.getLikes(),
    follow: (parent, args) => service.followService.getFollowById(args),
    follows: () => service.followService.getFollows()
  },
  Mutation: {
    createUser: (parent, args) => service.userService.createUser({...args}),
    updateUser: (parent, args) => service.userService.updateUserById(args.id, args),
    deleteUser: (parent, args) => service.userService.deleteUserById(args.id),
    createPost: (parent, args) => service.postService.createPost({...args}),
    updatePost: (parent, args) => service.postService.updatePostById(args.id, args),
    deletePost: (parent, args) => service.postService.deletePostById(args.id),
    createComment: (parent, args) => service.commentService.createComment({...args}),
    updateComment: (parent, args) => service.commentService.updateCommentById(args.id, args),
    deleteComment: (parent, args) => service.commentService.deleteCommentById(args.id),
    createLike: (parent, args) => service.likeService.createLike({...args}),
    updateLike: (parent, args) => service.likeService.updateLikeById(args.id, args),
    deleteLike: (parent, args) => service.likeService.deleteLikeById(args.id),
    createFollow: (parent, args) => service.followService.createFollow({...args}),
    updateFollow: (parent, args) => service.followService.updateFollowById(args.id, args),
    deleteFollow: (parent, args) => service.followService.deleteFollowById(args.id),
  },
};