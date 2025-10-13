import grpc from '@grpc/grpc-js';
import { grpcServices } from '../grpcServices.js';

function main() {

    const client = new grpcServices.comment.commentService.CommentService('localhost:50051', grpc.credentials. createInsecure());

    client.getComment({id: 1}, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetComment =>", response);
    });
    client.getComments({} , (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado GetComments =>", response);
    });
    let newComment = {
        name: "Remote",
        surname: "Procedure Call",
        user_name: "grpc",
        birth_date: new Date().toISOString(),
        gender: "m",
        is_premium: false,
        email: "grpc@teste.teste",
        password: "teste",
    };
    // client.createComment(newComment, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado CreateComments =>", response);
    // });
    // let updatedComment = {
    //     id: 7,
    //     name: "Teste GRPC",
    //     is_premium: true,
    // };
    // client.updateComment(updatedComment, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado UpdateComments =>", response);
    // });
    let deleteId = 9;
    // client.deleteComment({id: deleteId}, (err, response) => {
    //     if(err) {
    //         console.error('Error:', err);
    //         return;
    //     };
    //     console.log("Resultado DeleteComments =>", response);
    // });
}

main();