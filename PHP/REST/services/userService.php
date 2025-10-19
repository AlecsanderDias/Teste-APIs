<?php 

namespace Services;

use flight;

class UserService {
    static function getUsers(): array {
        $sql = "SELECT * FROM users";
        try {
            $users = Flight::db()->fetchAll($sql);
            return $users;
        } catch (\Throwable $th) {
            throw $th;
        }
        return [];
    }

    static function getUser(int $id) {
        $sql = "SELECT * FROM users WHERE id = ?";
        try {
            $user = Flight::db()->fetchRow($sql, [$id]);
            return $user;
        } catch (\Throwable $th) {
            throw $th;
        }
        return [];
    }

    static function createUser(array $data) {
        $fields = "name, surname, user_name, birth_date, gender, is_premium, email, password";
        $values = "?, ?, ?, ?, ?, ?, ?, ?";
        $sql = "INSERT INTO users ($fields) VALUES ($values)";
        var_dump($data, [...$data]);
    }

    static function updateUser(int $id, array $data) {
        $fieldsAndValues = "";
        $sql = "UPDATE users SET $fieldsAndValues WHERE id = ?";
    }

    static function deleteUser(int $id) {
        $sql = "DELETE FROM users WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, [$id]);
            return ['message' => "O usuário com id = $id, foi deletado com sucesso!"];
        } catch (\Throwable $th) {
            throw $th;
        }
        return ['message' => "Erro na hora de deletar!"];
    }
}