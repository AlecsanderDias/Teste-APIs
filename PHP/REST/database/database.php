<?php 

// $dir = dirname(__DIR__);
// $dotenv = Dotenv\Dotenv::createImmutable($dir);
// $dotenv->safeLoad();

// class DatabaseConnection {
//     static function getConnection() {
//         $connection = "mysql:host=" + $_ENV['DB_HOST']+ ";dbname="+ $_ENV['DB_DATABASE'];
//         $user = $_ENV['DB_USER'];
//         $pass = $_ENV['DB_PASS'];
//         try {
//             $conn = new PDO($connection, $user, $pass);
//             $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//         } catch (PDOException $e) {
//             echo "Erro de conexão: " . $e->getMessage();
//         }
//         return $conn;
//     }
// }

use flight\database\PdoWrapper;

Flight::register('db', PdoWrapper::class, [
    'mysql:host=localhost;dbname=prisma', 'root', 'root', [
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'utf8mb4\'',
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_STRINGIFY_FETCHES => false,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
]);