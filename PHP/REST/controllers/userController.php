<?php 

namespace Controllers;

use Services\UserService;
use flight;
use Models\User;

class UserController {
    public function index(): void {
        $users = UserService::getUsers();
        Flight::json(['users' => $users]);
    }

    public function show(string $id): void {
        $user = UserService::getUser((int)$id);
        Flight::json(['user' => $user]);
    }

    public function create(): void {
    
    }
    
    public function store(): void {
        $data = Flight::request()->data;
        var_dump($data);
        // UserService::createUser($data);
    }

    public function edit(string $id): void {

    }

    public function update(string $id, array $data): void {
        var_dump($id, $data);
    }

    public function delete(string $id): void {
        $message = UserService::deleteUser((int)$id);
    }
}