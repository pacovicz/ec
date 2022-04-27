<?php
    session_start();
    $_SESSION['tempo_criacao'] = time();
    if($_SESSION['tempo_criacao'] > $_SESSION['tempo_expira']){
        session_destroy();
    }
    
    echo json_encode($_SESSION['username']);
    ?>