import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema.js';
import { root } from './resolvers.js';
import { UserService } from './Services/userService.js';
 
const app = express();

const userService = new UserService();

app.get('/', async (req, res) => {
  res.json({mensagem: "Sucesso!"});
});

app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: root,
  }),
);

export {app};