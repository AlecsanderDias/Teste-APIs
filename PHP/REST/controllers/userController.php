<?php 

namespace Controllers;

use flight;
use Models\User;
use Services\UserService;

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

    }

    public function edit(string $id): void {

    }

    public function update(string $id): void {

    }

    public function delete(string $id): void {

    }
}