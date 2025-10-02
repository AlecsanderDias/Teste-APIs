// import express from 'express';
// import { createHandler } from 'graphql-http/lib/use/express';
// import { root } from './resolvers.js';
// import { schema } from './schema.js';
// import { graphqlHTTP } from 'express-graphql';
// import { UserService } from './Services/userService.js';


// const PORT = 4000;

// const app = express();

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//   }),
// );

// app.listen(PORT, () => {
//   console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
// });

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolvers } from './resolvers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4000;
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname , 'schema.graphql'), 'utf-8'),
  resolvers: resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: PORT
  }
});

console.log(`Server listening on ${url}`);