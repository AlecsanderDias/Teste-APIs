<?php 

namespace Services;

use Exception;
use flight;

class CommentService {
    static function getComments() {
        $sql = "SELECT * FROM comments";
        try {
            $result = Flight::db()->fetchAll($sql);
            return $result;
        } catch (Exception $e) {
            Flight::json([
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ], 500);
        }
    }

    static function getComment(int $id) {
        $sql = "SELECT * FROM comments WHERE id = ?";
        try {
            $result = Flight::db()->fetchRow($sql, [$id]);
            if(empty($result[0])) throw new Exception("Usuário não encontrado.");
            return $result;
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ];
        }
    }

    static function createComment(array $data) {
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
        $sql = "INSERT INTO comments ($fields) VALUES ($values)";
        try {
            Flight::db()->runQuery($sql, $value);
            return ['message' => 'O usuário foi criado com sucesso!'];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a criação: '.$e->getMessage(),
            ];
        }
    }

    static function updateComment(int $id, array $data) {
        $fields = "";
        $values = [];
        foreach ($data as $key => $value) {
            $fields .= " $key = ?,";
            $values[] = $value;
        };
        $values[] = $id;
        $fields[strlen($fields) - 1] = " ";
        $sql = "UPDATE comments SET $fields WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, $values);
            return ['message' => "O usuário com id = $id, foi atualizado com sucesso!"];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a atualização: '.$e->getMessage(),
            ];
        }
        
    }

    static function deleteComment(int $id) {
        $sql = "DELETE FROM comments WHERE id = ?";
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