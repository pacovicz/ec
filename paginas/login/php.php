<?php
    function login(){
        global $email, $con, $senhaHash;
        $query = sprintf("SELECT username, email, cpf, senhaHash FROM cadastro");
        $dados = mysqli_query($con, $query);
        $linha = mysqli_fetch_assoc($dados);
        $total = mysqli_num_rows($dados);
        do {
            if($linha['email'] == $email){
                if($linha['senhaHash'] == $senhaHash){
                    session_start();
                    $_SESSION['username'] = $linha['username'];
                    $_SESSION['email'] = $linha['email'];
                    $_SESSION['cpf'] = $linha['cpf'];
                    $_SESSION['tempo_criacao'] = time();
                    $_SESSION['tempo_expira'] = time() + 60;
                    $_SESSION['session_id'] = session_id();
                    return 0;
                }
                return 1;
            }
        } while($linha = mysqli_fetch_assoc($dados));
        return 2;
    }
    require("dbconnect.php");
    if(mysqli_connect_errno()){
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    $email = $_POST["email"];
    $senhaHash = $_POST["senhaHash"];

    if(login() == 0){
        
        echo (file_exists(session_save_path().'/sess_'.$_SESSION['session_id']) ? "Existe!" : "Não existe!");
        echo $_SESSION['username'];
        echo $_SESSION['cpf'];
        echo $_SESSION['email'];
        echo json_encode("0");
    } else if (login() == 1) {
        echo json_encode("1");
    } else {
        echo json_encode("2");
    }
?>