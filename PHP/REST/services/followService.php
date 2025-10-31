<?php 

namespace Services;

use Exception;
use flight;
use Models\Follow;

class FollowService {
    static function getFollows(): array {
        $sql = "SELECT * FROM follows";
        try {
            $result = Flight::db()->fetchAll($sql);
            return $result;
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ];
        }
    }

    static function getFollow(int $id): Follow|array {
        $sql = "SELECT * FROM follows WHERE id = ?";
        try {
            $result = Flight::db()->fetchRow($sql, [$id]);
            if(empty($result)) throw new Exception("Follow não encontrado.");
            return $result;
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ];
        }
    }

    static function createFollow(array $data):array {
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
        $sql = "INSERT INTO follows ($fields) VALUES ($values)";
        try {
            Flight::db()->runQuery($sql, $value);
            return ['message' => 'O follow foi criado com sucesso!'];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a criação: '.$e->getMessage(),
            ];
        }
    }

    static function updateFollow(int $id, array $data): array {
        $fields = "";
        $values = [];
        foreach ($data as $key => $value) {
            $fields .= " $key = ?,";
            $values[] = $value;
        };
        $values[] = $id;
        $fields[strlen($fields) - 1] = " ";
        $sql = "UPDATE follows SET $fields WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, $values);
            return ['message' => "O follow com id = $id, foi atualizado com sucesso!"];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a atualização: '.$e->getMessage(),
            ];
        }
        
    }

    static function deleteFollow(int $id): array {
        $sql = "DELETE FROM follows WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, [$id]);
            return ['message' => "O follow com id = $id, foi deletado com sucesso!"];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a deleção: '.$e->getMessage(),
            ];
        }
    }
}