import grpc from '@grpc/grpc-js';
import protoloader from '@grpc/proto-loader';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { userCalls } from './Calls/userCalls.js';
import { postCalls } from './Calls/postCalls.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = '0.0.0.0:50051';
const protoFile = __dirname + '/proto/userService.proto';
const packageDefinition = protoloader.loadSync(protoFile, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const userService = grpc.loadPackageDefinition(packageDefinition).user;
const postService = grpc.loadPackageDefinition(packageDefinition).post;

function main() {
    const server = new grpc.Server();
    server.addService(userService.UserService.service, userCalls);
    server.addService(postService.PostService.service, postCalls);
    server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
        // server.start();
        console.log(`Server running on port ${PORT}`);
    });
}

main();