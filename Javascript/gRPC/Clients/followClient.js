import grpc from '@grpc/grpc-js';
import { grpcServices } from '../grpcServices.js';

function main() {

    const client = new grpcServices.follow.followService.FollowService('localhost:50051', grpc.credentials. createInsecure());

    client.getFollow({id: 1}, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetFollow =>", response);
    });
    client.getFollows({} , (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetFollows =>", response);
    });
    let newFollow = {
        name: "Remote",
        surname: "Procedure Call",
        user_name: "grpc",
        birth_date: new Date().toISOString(),
        gender: "m",
        is_premium: false,
        email: "grpc@teste.teste",
        password: "teste",
    };
    // client.createFollow(newFollow, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado CreateFollows =>", response);
    // });
    // let updatedFollow = {
    //     id: 7,
    //     name: "Teste GRPC",
    //     is_premium: true,
    // };
    // client.updateFollow(updatedFollow, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado UpdateFollows =>", response);
    // });
    let deleteId = 9;
    // client.deleteFollow({id: deleteId}, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado DeleteFollows =>", response);
    // });
}

main();