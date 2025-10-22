<?php

use flight\database\PdoWrapper;
use Controllers\UserController;

require './vendor/autoload.php';
// require './database/database.php';

// $controllerFolder = '//controllers//';
Flight::path(__DIR__);


$dir = dirname(__DIR__);
$dotenv = Dotenv\Dotenv::createImmutable($dir);
$dotenv->safeLoad();

$connection = 'mysql:host='.$_ENV['DB_HOST'].';dbname='.$_ENV['DB_DATABASE'];
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];

Flight::register('db', PdoWrapper::class, [
    $connection, $user, $pass, [
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'utf8mb4\'',
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_STRINGIFY_FETCHES => false,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
]);


// Flight::route('/users', function() {
//     $users = Flight::db()->fetchAll("SELECT * FROM users;");
//     foreach ($users as $user) {
//         echo $user->name;
//     }
//     Flight::json([
//         'message' => 'Grande sucesso',
//         'Resultado' => $users
//     ]);
// });

Flight::resource('/users', UserController::class);

Flight::start();