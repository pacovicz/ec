<?php
    include("../../../dbconnect/dbconnect.php");
    if(mysqli_connect_errno()) {
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    $query = sprintf("SELECT imagem, nome FROM produtos");
    $dados = mysqli_query($con, $query);
    $linha = mysqli_fetch_assoc($dados);
    $total = mysqli_num_rows($dados);
    
    while ($row = mysqli_fetch_assoc($dados)) {
        echo json_encode($row);
    }

?>