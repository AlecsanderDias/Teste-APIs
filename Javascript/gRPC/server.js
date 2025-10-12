import grpc from '@grpc/grpc-js';
import { grpcServices } from './grpcServices.js';


// import protoloader from '@grpc/proto-loader';
// import { userCalls } from './Calls/userCalls.js';
// import { postCalls } from './Calls/postCalls.js';
// import { getProtoFilePath } from './protofileName.js';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const protoFile = __dirname + '/proto/userService.proto';


// const protoFileName = "userService";
// const protoFilePath = getProtoFilePath(protoFileName);
// const packageDefinition = protoloader.loadSync(protoFilePath, {
//   keepCase: true,
//   longs: String,
//   enums: String,
//   defaults: true,
//   oneofs: true,
// });

// const userService = grpc.loadPackageDefinition(packageDefinition).user;
// const postService = grpc.loadPackageDefinition(packageDefinition).post;
const PORT = '0.0.0.0:50051';

function main() {
    const server = new grpc.Server();
    for(let service in grpcServices) {
      let first = `${service}Service`;
      let second = first.charAt(0).toUpperCase() + first.slice(1);
      let third = `${service}Calls`;
      server.addService(grpcServices[service][first][second]["service"], grpcServices[service][third]);
    }
    // server.addService(userService.UserService.service, userCalls);
    // server.addService(postService.PostService.service, postCalls);
    server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
        // server.start();
        console.log(`Server running on port ${PORT}`);
    });
}

main();