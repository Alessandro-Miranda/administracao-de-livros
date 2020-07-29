<?php
    header('Content-Type: application/json; charset=UTF-8');
    
    $name = $_GET['nome'];
    $username = 'root';
    $password = 'gugaBB05!8';
    $queryInstruction = 'DELETE FROM livros WHERE nome = :nome';
    $result = '';

    try
    {
        $connection = new PDO('mysql:host=127.0.0.1:3306; dbname=livros', $username, $password);
        $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result = $connection -> prepare($queryInstruction);
        $result -> execute(array(
            ':nome' => $name
        ));

        echo json_encode($result -> rowCount());
    }
    catch(PDOException $e)
    {
        echo json_encode(array('Error: '=>$e->getMessage()));
    }
    
?>