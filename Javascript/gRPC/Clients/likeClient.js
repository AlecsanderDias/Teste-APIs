import grpc from '@grpc/grpc-js';
import { grpcServices } from '../grpcServices.js';

function main() {
    const client = new grpcServices.like.likeService.LikeService('localhost:50051', grpc.credentials. createInsecure());

    client.getLike({id: 25}, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetLike =>", response);
    });
    client.getLikes({} , (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetLikes =>", response);
    });
    let newLike = {
        postId: 3,
        userId: 3
    };
    client.createLike(newLike, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado CreateLikes =>", response);
    });
    let updatedLike = {
        id: 33,
        postId: 3,
        userId: 3
    };
    client.updateLike(updatedLike, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado UpdateLikes =>", response);
    });
    let deleteId = 9;
    // client.deleteLike({id: deleteId}, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado DeleteLikes =>", response);
    // });
}

main();