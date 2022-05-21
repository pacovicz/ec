<?php
    session_start();
    function checaSessao(){
        if(empty($_SESSION['username']) == true){
            return "Not logged in";
        } else { return "Already logged in"; }
        }

    if(checaSessao() == "Already logged in"){ 
        echo json_encode("Already logged in");
    } else {
        echo json_encode("Not logged in");
    }
    ?>
