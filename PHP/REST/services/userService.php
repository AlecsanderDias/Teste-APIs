<?php 

namespace Services;

use Exception;
use flight;
use Models\User;

class UserService {
    static function getUsers(): array {
        $sql = "SELECT * FROM users";
        try {
            $result = Flight::db()->fetchAll($sql);
            return $result;
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ];
        }
    }

    static function getUser(int $id): User|array {
        $sql = "SELECT * FROM users WHERE id = ?";
        try {
            $result = Flight::db()->fetchRow($sql, [$id]);
            if(empty($result)) throw new Exception("Usuário não encontrado.");
            $result = new User(...$result);
            return $result;
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ];
        }
    }

    static function createUser(array $data): array {
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
        try {
            Flight::db()->runQuery($sql, $value);
            return ['message' => 'O usuário foi criado com sucesso!'];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a criação: '.$e->getMessage(),
            ];
        }
    }

    static function updateUser(int $id, array $data): array {
        $fields = "";
        $values = [];
        foreach ($data as $key => $value) {
            $fields .= " $key = ?,";
            $values[] = $value;
        };
        $values[] = $id;
        $fields[strlen($fields) - 1] = " ";
        $sql = "UPDATE users SET $fields WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, $values);
            return ['message' => "O usuário com id = $id, foi atualizado com sucesso!"];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a atualização: '.$e->getMessage(),
            ];
        }
        
    }

    static function deleteUser(int $id): array {
        $sql = "DELETE FROM users WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, [$id]);
            return ['message' => "O usuário com id = $id, foi deletado com sucesso!"];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a deleção: '.$e->getMessage(),
            ];
        }
    }
}