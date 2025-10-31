<?php 

namespace Services;

use Exception;
use flight;
use Models\Post;

class PostService {
    static function getPosts(): array {
        $sql = "SELECT * FROM posts";
        try {
            $result = Flight::db()->fetchAll($sql);
            return $result;
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ];
        }
    }

    static function getPost(int $id): Post|array {
        $sql = "SELECT * FROM posts WHERE id = ?";
        try {
            $result = Flight::db()->fetchRow($sql, [$id]);
            if(empty($result)) throw new Exception("Post não encontrado.");
            return $result;
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a requisição: '.$e->getMessage(),
            ];
        }
    }

    static function createPost(array $data): array {
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
        $sql = "INSERT INTO posts ($fields) VALUES ($values)";
        try {
            Flight::db()->runQuery($sql, $value);
            return ['message' => 'O post foi criado com sucesso!'];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a criação: '.$e->getMessage(),
            ];
        }
    }

    static function updatePost(int $id, array $data): array {
        $fields = "";
        $values = [];
        foreach ($data as $key => $value) {
            $fields .= " $key = ?,";
            $values[] = $value;
        };
        $values[] = $id;
        $fields[strlen($fields) - 1] = " ";
        $sql = "UPDATE posts SET $fields WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, $values);
            return ['message' => "O post com id = $id, foi atualizado com sucesso!"];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a atualização: '.$e->getMessage(),
            ];
        }
        
    }

    static function deletePost(int $id): array {
        $sql = "DELETE FROM posts WHERE id = ?";
        try {
            Flight::db()->runQuery($sql, [$id]);
            return ['message' => "O post com id = $id, foi deletado com sucesso!"];
        } catch (Exception $e) {
            return [
                'error' => 'Erro durante a deleção: '.$e->getMessage(),
            ];
        }
    }
}