<?php 

$dir = dirname(__DIR__);
$dotenv = Dotenv\Dotenv::createImmutable($dir);
$dotenv->safeLoad();

class DatabaseConnection {
    static function getConnection() {
        $connection = "mysql:host=" + $_ENV['DB_HOST']+ ";dbname="+ $_ENV['DB_DATABASE'];
        $user = $_ENV['DB_USER'];
        $pass = $_ENV['DB_PASS'];
        try {
            $conn = new PDO($connection, $user, $pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        }
        return $conn;
    }
}
