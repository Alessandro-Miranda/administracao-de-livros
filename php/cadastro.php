<?php
    header('Content-Type: application/json; charset=UTF-8');
    
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $author = $data->author;
    $pages = $data->pages;
    $price = $data->price;
    $price = str_replace('.', '', $price);
    $price = str_replace(',', '.', $price); 
    $flag = 1;
    $inclusionDate = $data->date;

    $username = 'root';
    $password = 'gugaBB05!8';
    $queryInstruction = 'INSERT INTO livros VALUES (:nome, :autor, :paginas, :valor, :flag, :dataInclusao)';
    $result = '';

    try
    {
        $connection = new PDO('mysql:host=127.0.0.1:3306; dbname=livros', $username, $password);
        $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $result = $connection -> prepare('SELECT * FROM livros WHERE nome=:nome');
        $result -> execute(array(
            ':nome'=>$name
        ));
        if($result->rowCount() == 0)
        {
            $result = $connection -> prepare($queryInstruction);
            $result -> execute(array(
                ':nome' => $name,
                ':autor' => $author,
                ':paginas' => $pages,
                ':valor' => $price,
                ':flag' => $flag,
                ':dataInclusao' => $inclusionDate
            ));
            echo $result->rowCount();
        }
        else
        {
            echo json_encode("Este livro já existe");
        }
        // echo json_encode($result -> fetchAll(PDO::FETCH_ASSOC));
    }
    catch(PDOException $e)
    {
        echo json_encode('Error: '.$e->getMessage());
    }
    
?>