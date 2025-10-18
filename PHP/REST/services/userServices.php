<?php 

namespace Services;

use flight;

class UserService {
    static function getUsers(): array {
        $sql = "SELECT * FROM users;";
        try {
            $users = Flight::db()->fetchAll($sql);
            return $users;
        } catch (\Throwable $th) {
            throw $th;
        }
        return [];
    }

    static function getUser(int $id) {
        $sql = "SELECT * FROM users WHERE id = $id;";
        try {
            $user = Flight::db()->fetchRow($sql);
            return $user;
        } catch (\Throwable $th) {
            throw $th;
        }
        return [];
    }

    static function createUser(array $data) {

    }

    static function updateUser(int $id, array $data) {
        
    }
}