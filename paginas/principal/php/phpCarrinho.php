<?php
    include("../../../dbconnect/dbconnect.php");
    if(mysqli_connect_errno()) {
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    include('../../../cripto/cripto/criptolib.php');
    $mensagem = descriptografar($_POST['message']);;
    session_start();
    $id_produto = $mensagem['id'];
    $id_usuario = $_SESSION['id'];
    $insert_intoDB = "INSERT INTO carrinho (id_produto, id_usuario) VALUES ('$id_produto','$id_usuario')";
    mysqli_query($con, $insert_intoDB);
    $query = sprintf("SELECT count(*) FROM carrinho WHERE id_usuario = $id_usuario");
    $data = mysqli_query($con, $query);
    $quantidade_carrinho = mysqli_fetch_assoc($data);
    echo json_encode($quantidade_carrinho);