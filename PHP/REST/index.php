<?php

use flight\database\PdoWrapper;

require './vendor/autoload.php';
require './database/database.php';

$dir = dirname(__DIR__);
$dotenv = Dotenv\Dotenv::createImmutable($dir);
$dotenv->safeLoad();

Flight::register('db', PdoWrapper::class, [
    'mysql:host=localhost;dbname=prisma', 'root', 'root', [
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'utf8mb4\'',
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_STRINGIFY_FETCHES => false,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
]);


Flight::route('/', function() {
    $users = Flight::db()->fetchAll("SELECT * FROM users;");
    foreach ($users as $user) {
        echo $user->name;
    }
    Flight::json([
        'message' => 'Grande sucesso',
        'Resultado' => $users
    ]);
});

Flight::start();