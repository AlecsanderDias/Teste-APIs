import grpc from '@grpc/grpc-js';
import protoloader from '@grpc/proto-loader';
import { userCalls } from './userCalls.js';

const PORT = '0.0.0.0:50051';
const protoFile = './grpc/system.proto';
const packageDefinition = protoloader.loadSync(protoFile, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const gservice = grpc.loadPackageDefinition(packageDefinition).system;

function main() {
    const server = new grpc.Server();
    server.addService(gservice.Data.service, userCalls);
    server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
        // server.start();
        console.log(`Server running on port ${PORT}`);
    });
}

main();