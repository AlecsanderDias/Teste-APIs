<?php 

namespace Services;

use Exception;
use flight;
use Models\Like;

class LikeService {
    static function getLikes(): array {
        $sql = "SELECT * FROM likes";
        try {
            $result = Flight::db()->fetchAll($sql);
            return $result;
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ];
        }
    }

    static function getLike(int $id): Like|array {
        $sql = "SELECT * FROM likes WHERE id = ?";
        try {
            $result = Flight::db()->fetchRow($sql, [$id]);
            if(empty($result)) throw new Exception("Like não encontrado.");
            return $result;
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ];
        }
    }

    static function createLike(array $data) {
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
        $sql = "INSERT INTO likes ($fields) VALUES ($values)";
        try {
            Flight::db()->runQuery($sql, $value);
            return ['message' => 'O like foi criado com sucesso!'];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a criação: '.$e->getMessage(),
            ];
        }
    }

    static function updateLike(int $id, array $data) {
        $fields = "";
        $values = [];
        foreach ($data as $key => $value) {
            $fields .= " $key = ?,";
            $values[] = $value;
        };
        $values[] = $id;
        $fields[strlen($fields) - 1] = " ";
        $sql = "UPDATE likes SET $fields WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, $values);
            return ['message' => "O like com id = $id, foi atualizado com sucesso!"];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a atualização: '.$e->getMessage(),
            ];
        }
        
    }

    static function deleteLike(int $id) {
        $sql = "DELETE FROM likes WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, [$id]);
            return ['message' => "O like com id = $id, foi deletado com sucesso!"];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a deleção: '.$e->getMessage(),
            ];
        }
    }
}