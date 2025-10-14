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
        content: "Tesando Comentário",
        userId: 2,
        postId: 3
    };
    client.createComment(newComment, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado CreateComments =>", response);
    });
    let updatedComment = {
        id: 4,
        content: "Atualizando Comentário",
        userId: 2,
        postId: 3
    };
    client.updateComment(updatedComment, (err, response) => {
        if(err) {
            console.error('Error:', err);
            return;
        };
        console.log("Resultado UpdateComments =>", response);
    });
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