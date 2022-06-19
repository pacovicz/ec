<?php
    include("../../../dbconnect/dbconnect.php");
    if(mysqli_connect_errno()) {
        echo "conexão com a database falhou!: ";
    }
    session_start();
    $id_usuario = $_SESSION['id'];
    $result = mysqli_query($con, "SELECT c.id as id_compra, p.id, p.imagem, p.nome, p.preco FROM carrinho as c, produtos as p where c.id_produto = p.id and c.id_usuario = $id_usuario", MYSQLI_USE_RESULT);

    $i = 0;
    while ($dados = mysqli_fetch_assoc($result)) {
      $retorno[$i]["id_compra"] = $dados["id_compra"];
      $retorno[$i]["id"] = $dados["id"];
      $retorno[$i]["nome"] = $dados["nome"];
      $retorno[$i]["imagem"] = $dados["imagem"];
      $retorno[$i]["preco"] = $dados["preco"];
    
      $i++;
    }
    echo json_encode($retorno);
?>