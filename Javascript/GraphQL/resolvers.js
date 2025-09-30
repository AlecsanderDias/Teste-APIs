import { UserService } from "./Services/userService.js";

const userService = new UserService();

export const root = {
  Query: {
    user: async ({id}) => {
      const user = await userService.getUserById(id);
      console.log(user);
      return user;
    },
    users: async () => {
      const users = await userService.getUsers();
      console.log(users);
      return users;
    },
  },
  Mutation: {

  }
};