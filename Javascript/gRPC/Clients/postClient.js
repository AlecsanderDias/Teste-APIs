import grpc from '@grpc/grpc-js';
import { grpcServices } from '../grpcServices.js';

function main() {
    const client = new grpcServices.post.postService.PostService('localhost:50051', grpc.credentials.createInsecure());

    client.getPost({id: 3}, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetPost =>", response);
    });
    client.getPosts({} , (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetPosts =>", response);
    });
    let newPost = {
        content: "Remote",
        tags: "Procedure Call",
        userId: 3
    };
    client.createPost(newPost, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado CreatePosts =>", response);
    });
    let updatedPost = {
        id: 7,
        content: "Teste GRPC",
        tags: "#teste #teste1",
    };
    client.updatePost(updatedPost, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado UpdatePosts =>", response);
    });
    let deleteId = 9;
    // client.deletePost({id: deleteId}, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado DeletePosts =>", response);
    // });
}

main();