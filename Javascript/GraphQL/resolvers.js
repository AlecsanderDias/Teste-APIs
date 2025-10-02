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
    createUser: (parent, args) => {
      return service.userService.createUser({args});
    }
  }
};