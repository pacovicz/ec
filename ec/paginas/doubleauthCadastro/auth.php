<?php
    session_start();
    require("dbconnect.php");
    if(mysqli_connect_errno()){
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    $username = $_SESSION['cad_username'];
    $cpf = $_SESSION['cad_cpf'];
    $email = $_SESSION['cad_email'];
    $senhaHash = $_SESSION['cad_senhaHash'];
    
    $codigoRecebido = $_POST["codigo"];
    function checaCodigo(){
        global $codigoRecebido;
        if($codigoRecebido == $_SESSION['codigoVerificacao']){
            return 0;
        } else {
            return 1;
        }
    }
    if(checaCodigo() == 0){
        $insert_intoDB = "INSERT INTO cadastro (username, cpf, email, senhaHash) VALUES ('$username','$cpf','$email','$senhaHash')";
        mysqli_query($con, $insert_intoDB);
        echo json_encode("0");
    } else {
        echo json_encode("1");
    }