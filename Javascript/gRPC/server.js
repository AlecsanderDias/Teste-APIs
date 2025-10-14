import grpc from '@grpc/grpc-js';
import { grpcServices } from './grpcServices.js';

const PORT = '0.0.0.0:50051';

function main() {
    const server = new grpc.Server();
    for(let service in grpcServices) {
      let first = `${service}Service`;
      let second = first.charAt(0).toUpperCase() + first.slice(1);
      let third = `${service}Calls`;
      server.addService(grpcServices[service][first][second]["service"], grpcServices[service][third]);
    }
    server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
        // server.start();
        console.log(`Server running on port ${PORT}`);
    });
}

main();