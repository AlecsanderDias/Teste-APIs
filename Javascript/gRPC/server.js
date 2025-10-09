import grpc from '@grpc/grpc-js';
import protoloader from '@grpc/proto-loader';

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

function getUser(call, callback) {
    callback(null, {
        id: 1,
        name: 2,
        surname: 3,
        user_name: 4,
        birth_data: 5,
        gender: 6,
        is_premium: 7,
        email: 8,
        password: 9,
        created_at: 10,
        updated_at: 11,
        deleted_at: 12,
    });
}

function main() {
    const server = new grpc.Server();
    server.addService(gservice.Data.service, {getUser: getUser});
    server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
        // server.start();
        console.log(`Server running on port ${PORT}`);
    })
}

main();