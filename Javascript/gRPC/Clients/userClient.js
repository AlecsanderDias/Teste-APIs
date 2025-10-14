import grpc from '@grpc/grpc-js';
import { grpcServices } from '../grpcServices.js';

function main() {
    const client = new grpcServices.user.userService.UserService('localhost:50051', grpc.credentials. createInsecure());

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
        user_name: "grpcTeste",
        birth_date: new Date().toISOString(),
        gender: "m",
        is_premium: false,
        email: "grpc.teste@teste.teste",
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
}

main();