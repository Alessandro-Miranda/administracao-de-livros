<?php
    header('Content-Type: application/json; charset=UTF-8');
    
    $username = 'root';
    $password = 'gugaBB05!8';
    $queryInstruction = 'SELECT * FROM livros';
    $result = '';

    try
    {
        $connection = new PDO('mysql:host=127.0.0.1:3306; dbname=livros', $username, $password);
        $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result = $connection -> query($queryInstruction);

        echo json_encode($result -> fetchAll(PDO::FETCH_ASSOC));
    }
    catch(PDOException $e)
    {
        echo json_encode(array('Error: '=>$e->getMessage()));
    }
    
?>