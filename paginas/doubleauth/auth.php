<?php
    session_start();
    $codigoRecebido = $_POST["codigo"];
    function checaCodigo(){
        global $codigoRecebido;
        if($codigoRecebido == $_SESSION['codigoVerificacao']){
            $_SESSION['sessao_valida'] = "true";
            return 0;
        } else {
            return 1;
        }
    }
    if(checaCodigo() == 0){
        echo json_encode("Valid autentication");
    } else {
        echo json_encode("Invalid code");
    }