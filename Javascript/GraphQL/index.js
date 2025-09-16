import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema.js';
import { root } from './resolvers.js';
 
const PORT = 4000;
const app = express();
app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: root,
  }),
);
app.listen(PORT, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});