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
        name: "Remote",
        surname: "Procedure Call",
        user_name: "grpc",
        birth_date: new Date().toISOString(),
        gender: "m",
        is_premium: false,
        email: "grpc@teste.teste",
        password: "teste",
    };
    // client.createPost(newPost, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado CreatePosts =>", response);
    // });
    // let updatedPost = {
    //     id: 7,
    //     name: "Teste GRPC",
    //     is_premium: true,
    // };
    // client.updatePost(updatedPost, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado UpdatePosts =>", response);
    // });
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