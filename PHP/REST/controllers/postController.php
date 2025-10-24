<?php 

namespace Controllers;

use Exception;
use Services\PostService;
use flight;
use Models\Post;

class PostController {
    public function index(): void {
        try {
            $result = PostService::getPosts();
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
            $result = PostService::getPost((int)$id);
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
            $result = PostService::createPost([...$data]);
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
            $result = PostService::updatePost((int)$id, [...$data]);
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
            $result = PostService::deletePost((int)$id);
            Flight::json($result, 200);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(),
            ], 500);
        }
    }
}