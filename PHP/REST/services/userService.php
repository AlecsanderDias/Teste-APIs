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
        $value = [];
        $values = "";
        $fields = "";
        foreach($data as $key => $val) {
            $value[] = $val;
            $fields .= " $key,";
            $values .= " ?,";
        }
        $fields[strlen($fields) - 1] = " ";
        $values[strlen($values) - 1] = " ";
        $sql = "INSERT INTO users ($fields) VALUES ($values)";
        // var_dump($sql, $value);
        Flight::db()->runQuery($sql, $value);
    }

    static function updateUser(int $id, array $data) {
        $fields = "";
        $values = [];
        foreach ($data as $key => $value) {
            $fields .= " $key = ?,";
            $values[] = $value;
        };
        $values[] = $id;
        $fields[strlen($fields) - 1] = " ";
        $sql = "UPDATE users SET $fields WHERE id = ?";
        // var_dump($sql, $values);
        Flight::db()->runQuery($sql, $values);
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