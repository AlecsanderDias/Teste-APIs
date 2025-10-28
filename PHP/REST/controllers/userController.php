<?php 

namespace Controllers;

use Exception;
use Services\UserService;
use flight;
use Models\User;

use function PHPSTORM_META\type;

class UserController {
    public function index(): void {
        try {
            $result = UserService::getUsers();
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
            $result = UserService::getUser((int)$id);
            Flight::json($result->getAllAttributesAndValues(), 200);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(),
            ], 500);
        }
    }

    public function store(): void {
        try {
            $data = Flight::request()->data;
            $result = UserService::createUser([...$data]);
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
            $result = UserService::updateUser((int)$id, [...$data]);
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
            $result = UserService::deleteUser((int)$id);
            Flight::json($result, 200);
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a operação: '.$e->getMessage(),
            ], 500);
        }
    }
}