<?php
    require("dbconnect.php");
    if(mysqli_connect_errno()){
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    $username = $_POST["username"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $senhaHash = $_POST["senhaHash"];
    
    $username = mysqli_real_escape_string($con, $_POST["username"]);
    $cpf = mysqli_real_escape_string($con, $_POST["cpf"]);
    $email = mysqli_real_escape_string($con, $_POST["email"]);
    $senhaHash = mysqli_real_escape_string($con, $_POST["senhaHash"]);

    $insert_intoDB = "INSERT INTO cadastro (username, cpf, email, senhaHash) VALUES ('$username','$cpf','$email','$senhaHash')";
    mysqli_query($con, $insert_intoDB); 

    echo json_encode("retorno de todos os dados: $username, $cpf, $email, $senhaHash");

?>