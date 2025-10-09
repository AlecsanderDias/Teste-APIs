import grpc from '@grpc/grpc-js';
import protoloader from '@grpc/proto-loader';

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
    const client = new gservice.Data('localhost:50051', grpc.credentials. createInsecure());

    client.getUser({id: 1}, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        }
        console.log(response);
    });

    client.getUser({id: 1}, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        }
        console.log(response.users);
    });
}

main();