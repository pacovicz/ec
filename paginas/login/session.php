<?php
    session_start();
    function checaSessao(){
        if(empty($_SESSION['sessao_valida']) == true){
            return 0;
        } else if($_SESSION['sessao_valida'] == "false"){
            return 2;
        } else{
            return 1;
        }
    }

    if(checaSessao() == 0){ 
        echo json_encode("0");
    } else if(checaSessao() == 1){
        echo json_encode("1");
    } else if(checaSessao() == 2){
        echo json_encode("2");
    }
    ?>
