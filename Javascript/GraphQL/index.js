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