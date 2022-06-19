<?php
    include("../../../dbconnect/dbconnect.php");
    if(mysqli_connect_errno()) {
        echo "conexão com a database falhou!: ";
    }
    include('../../../cripto/cripto/criptolib.php');
    $mensagem = descriptografar($_POST['message']);
    $id_produto = $mensagem['id'];
    $result = mysqli_query($con, "DELETE FROM carrinho where id = $id_produto", MYSQLI_USE_RESULT);
?>