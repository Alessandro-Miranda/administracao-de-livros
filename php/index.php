<?php
    $username = 'root';
    $password = 'gugaBB05!8';
    try
    {
        $connection = new PDO('mysql:host=127.0.0.1:3306; dbname=livros', $username, $password);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'conectou no bd';
    }
    catch(PDOException $e)
    {
        echo "Error: ".$e->getMessage();
    }
?>