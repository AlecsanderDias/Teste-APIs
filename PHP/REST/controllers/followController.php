<?php 

namespace Controllers;

use Exception;
use Services\FollowService;
use flight;
use Models\Follow;

class FollowController {
    public function index(): void {
        try {
            $result = FollowService::getFollows();
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
            $result = FollowService::getFollow((int)$id);
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
            $result = FollowService::createFollow([...$data]);
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
            $result = FollowService::updateFollow((int)$id, [...$data]);
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
            $result = FollowService::deleteFollow((int)$id);
            Flight::json($result, 200);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(),
            ], 500);
        }
    }
}