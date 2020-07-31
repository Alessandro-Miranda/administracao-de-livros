<?php
    header('Content-Type: application/json; charset=UTF-8');
    
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $author = $data->author;
    $pages = $data->pages;
    $price = $data->price;
    $price = str_replace('.', '', $price);
    $price = str_replace(',', '.', $price); 
    $flag = $data->flag;
    $editionDate = $data->date;
    $updateCondition = $data->updateCondition;

    $username = 'root';
    $password = 'gugaBB05!8';
    $queryInstruction = 'UPDATE livros SET nome=:titulo, autor=:autor, 
        quant_paginas=:paginas, preco=:preco, flag=:flag, data_inclusao_edicao=:dataEdicao 
            WHERE nome LIKE :nome';
    $result = '';
    
    try
    {
        $connection = new PDO('mysql:host=127.0.0.1:3306; dbname=livros', $username, $password);
        $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result = $connection -> prepare($queryInstruction);
        $result -> execute(array(
            ':titulo' => $name,
            ':autor' => $author,
            ':paginas' => $pages,
            ':preco' => $price,
            ':flag' => $flag,
            ':dataEdicao' => $editionDate,
            ':nome' => $updateCondition
        ));

        echo json_encode($result->rowCount());
    }
    catch(PDOException $e)
    {
        echo json_encode(array('Error: '=>$e->getMessage()));
    }
?>