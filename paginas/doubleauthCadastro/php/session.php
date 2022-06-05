<?php
    session_start();
    function checaSessao(){
        if(empty($_SESSION['cad_autenticado']) == true){
            return 1;
        } else {
            return 0;
        }
    }
    if(checaSessao() == 0){ 
        echo json_encode("Cadastro autenticado");
    } else if(checaSessao() == 1){
        echo json_encode("Cadastro não autenticado");
    }
    ?>
