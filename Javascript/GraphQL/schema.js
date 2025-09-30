import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type User {
    id: ID!
    name: String
    surname: String
    user_name: String
    birth_date: String
    gender: String
    is_premium: Boolean
    email: String
    password: String
    created_at: String
    updated_at: String
    deleted_at: String
  }

  type Post {
    id: ID!
    content: String
    tags: String
    created_at: String
    updated_at: String
    deleted_at: String
    userId: Int
  }

  type Comment {
    id: ID!
    content: String
    created_at: String
    updated_at: String
    deleted_at: String
    userId: Int
    postId: Int
  }

  type Like {
    id: ID!
    postId: Int
    userId: Int
  }

  type Follow {
    id: ID!
    followerId: Int
    followedId: Int
  }
  
  type Query {
    user(id: ID!): User
    users: [User!]!
    post(id: ID!): Post
    posts: [Post!]!
    comment(id: ID!): Comment
    comments: [Comment!]!
    like(id: ID!): Like
    likes: [Like!]!
    follow(id: ID!): Follow
    follows: [Follow!]!    
  }

  type Mutation {
    createUser(
      name: String,
      surname: String,
      user_name: String,
      birth_date: String,
      gender: String,
      is_premium: Boolean,
      email: String,
      password: String
    ): User!
  }
`);