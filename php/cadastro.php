<?php

    $nome = $_POST['nome'];
    $autor = $_POST['autor'];
    $paginas = $_POST['paginas'];
    $valor = $_POST['valor'];
    $valor = str_replace('.', '', $valor);
    $valor = str_replace(',', '.', $valor); 
    $flag = 1;
    $dataInclusao = date('Y-m-d');

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
            ':nome'=>$nome
        ));
        if($result->rowCount() == 0)
        {
            $result = $connection -> prepare($queryInstruction);
            $result -> execute(array(
                ':nome' => $nome,
                ':autor' => $autor,
                ':paginas' => $paginas,
                ':valor' => $valor,
                ':flag' => $flag,
                ':dataInclusao' => $dataInclusao
            ));
            echo 'Livro Cadastrado com sucesso';
        }
        else
        {
            echo "Este livro já existe";
        }
        // echo json_encode($result -> fetchAll(PDO::FETCH_ASSOC));
    }
    catch(PDOException $e)
    {
        echo json_encode(array('Error: '=>$e->getMessage()));
    }
    
?>