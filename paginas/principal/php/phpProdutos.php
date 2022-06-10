<?php
    include("../../../dbconnect/dbconnect.php");
    if(mysqli_connect_errno()) {
        echo "conexão com a database falhou!: ". mysqli_error();
    }

    $result = mysqli_query($con, "SELECT id, imagem, nome, preco FROM produtos", MYSQLI_USE_RESULT);

    $i = 0;
    while ($dados = mysqli_fetch_assoc($result)) {
      $retorno[$i]["id"] = $dados["id"];
      $retorno[$i]["nome"] = $dados["nome"];
      $retorno[$i]["imagem"] = $dados["imagem"];
      $retorno[$i]["preco"] = $dados["preco"];
    
      $i++;
    }
    echo json_encode($retorno);
?>