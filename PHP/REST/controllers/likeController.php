<?php 

namespace Controllers;

use Exception;
use Services\LikeService;
use flight;
use Models\Like;

class LikeController {
    public function index(): void {
        try {
            $result = LikeService::getLikes();
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
            $result = LikeService::getLike((int)$id);
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
            $result = LikeService::createLike([...$data]);
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
            $result = LikeService::updateLike((int)$id, [...$data]);
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
            $result = LikeService::deleteLike((int)$id);
            Flight::json($result, 200);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(),
            ], 500);
        }
    }
}