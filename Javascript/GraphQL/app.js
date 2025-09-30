import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema.js';
import { root } from './resolvers.js';
import { graphqlHTTP } from 'express-graphql';
 
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
  }),
);

export {app};