<?php 

use flight\database\PdoWrapper;

Flight::register('db', PdoWrapper::class, [
    'mysql:host=localhost;dbname=prisma', 'root', 'root', [
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'utf8mb4\'',
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_STRINGIFY_FETCHES => false,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
]);