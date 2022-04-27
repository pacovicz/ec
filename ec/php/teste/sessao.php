<?php
  
    session_start();

    $_SESSION['nome'] = 'Eduardo Lino';
    $_SESSION['email'] = "eduardo.lino@pucpr.br";
    $_SESSION['session_id'] = session_id();
    $_SESSION['session_name'] = session_name();
    $_SESSION['data_criacao'] = time();
    $_SESSION['data_exp'] = $_SESSION['data_criacao'] + 20;

    if (time() > $_SESSION['data_exp']) {
        echo "Se autentique novamente";
        setcookie(session_name(), "", 0, "/");
        session_destroy();
    }  
    else {
        echo "Você ainda está autenticado";
    }

    print_r($_SESSION);
?>