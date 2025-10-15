<?php 

require './vendor/autoload.php';

Flight::route('/', function() {
    Flight::json([
        'message' => 'Grande sucesso'
    ]);
});

Flight::start();