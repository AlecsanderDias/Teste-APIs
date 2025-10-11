import grpc from '@grpc/grpc-js';
import protoloader from '@grpc/proto-loader';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const protoFile = __dirname + '/proto/userService.proto';
const packageDefinition = protoloader.loadSync(protoFile, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const userService = grpc.loadPackageDefinition(packageDefinition).user;

function main() {
    const client = new userService.UserService('localhost:50051', grpc.credentials. createInsecure());

    client.getUser({id: 1}, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetUser =>", response);
    });
    client.getUsers({} , (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetUsers =>", response);
    });
    let newUser = {
        name: "Remote",
        surname: "Procedure Call",
        user_name: "grpc",
        birth_date: new Date().toISOString(),
        gender: "m",
        is_premium: false,
        email: "grpc@teste.teste",
        password: "teste",
    };
    // client.createUser(newUser, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado CreateUsers =>", response);
    // });
    // let updatedUser = {
    //     id: 7,
    //     name: "Teste GRPC",
    //     is_premium: true,
    // };
    // client.updateUser(updatedUser, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado UpdateUsers =>", response);
    // });
    let deleteId = 9;
    // client.deleteUser({id: deleteId}, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado DeleteUsers =>", response);
    // });

    // Posts
    client.getPosts({id: 3}, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetPosts =>", response);
    });
}

main();