<?php
    session_start();
    function checaSessao(){
        if(empty($_SESSION['sessao_valida']) == true){
            return 1;
        } else if($_SESSION['sessao_valida'] == "false"){
            return 2;
        } else{
            return 0;
        }
    }

    if(checaSessao() == 0){ 
        echo json_encode("Already autenticated");
    } else if(checaSessao() == 1){
        echo json_encode("Not logged in");
    } else if(checaSessao() == 2){
        echo json_encode("Non-autenticated, but logged in");
    }
    ?>
