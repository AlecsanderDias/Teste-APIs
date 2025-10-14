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
        followerId: 2,
        followedId: 4
    };
    client.createFollow(newFollow, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado CreateFollows =>", response);
    });
    let updatedFollow = {
        id: 4,
        followerId: 3,
        followedId: 4
    };
    client.updateFollow(updatedFollow, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado UpdateFollows =>", response);
    });
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