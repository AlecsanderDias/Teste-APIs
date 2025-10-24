<?php 

namespace Controllers;

use Exception;
use Services\CommentService;
use flight;
use Models\Comment;

class CommentController {
    public function index(): void {
        try {
            $result = CommentService::getComments();
            Flight::json($result, 200);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(), 
            ], 500);
        }
    }

    public function show(string $id): void {
        try {
            if(!ctype_digit($id)) throw new Exception('Id inválido');
            $result = CommentService::getComment((int)$id);
            Flight::json($result, 200);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(),
            ], 500);
        }
    }

    public function store(): void {
        try {
            $data = Flight::request()->data;
            $result = CommentService::createComment([...$data]);
            Flight::json($result, 201);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(),
            ], 500);
        }
    }

    public function update(string $id): void {
        try {
            if(!ctype_digit($id)) throw new Exception('Id inválido');
            $data = Flight::request()->data;
            $result = CommentService::updateComment((int)$id, [...$data]);
            Flight::json($result, 200);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(),
            ], 500);
        }
    }

    public function destroy(string $id): void {
        try {
            if(!ctype_digit($id)) throw new Exception('Id inválido');
            $result = CommentService::deleteComment((int)$id);
            Flight::json($result, 200);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(),
            ], 500);
        }
    }
}