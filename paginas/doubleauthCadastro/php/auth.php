<?php
    
    session_start();
    include("../../../dbconnect/dbconnect.php");
    include('../../../cripto/cripto/criptolib.php');
    if(mysqli_connect_errno()){
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    $username = $_SESSION['cad_username'];
    $cpf = $_SESSION['cad_cpf'];
    $email = $_SESSION['cad_email'];
    $senhaHash = $_SESSION['cad_senhaHash'];
    
    $data = descriptografar($_POST["message"]);
    $codigoRecebido = $data['codigo'];
    

    function checaCodigo(){
        global $codigoRecebido;
        if($codigoRecebido == $_SESSION['codigoVerificacao']){
            return "Success";
        } else {
            return "Invalid Code";
        }
    }
    if(checaCodigo() == "Success"){
        $insert_intoDB = "INSERT INTO cadastro (username, cpf, email, senhaHash) VALUES ('$username','$cpf','$email','$senhaHash')";
        mysqli_query($con, $insert_intoDB);
        echo json_encode("Success");
    } else {
        echo json_encode($_SESSION);
    }