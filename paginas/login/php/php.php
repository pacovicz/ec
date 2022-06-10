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
                    $_SESSION['tempo_expira'] = time() + 3600;
                    $_SESSION['session_id'] = session_id();
                    $_SESSION['sessao_valida'] = "false";
                    return 0;
                }
                return 1;
            }
        } while($linha = mysqli_fetch_assoc($dados));
        return 2;
}
	// error_reporting(0);
	include('../../../cripto/cripto/criptolib.php');
    $mensagem = descriptografar($_POST['message']);
    
    $mensagem = trim($mensagem);
    $mensagem = json_decode($mensagem, true);

    include("../../../dbconnect/dbconnect.php");
    if(mysqli_connect_errno()){
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    $email = $mensagem['email'];
    $senhaHash = $mensagem['senha'];
    if(login() == 0){
        echo json_encode("Success");
    } else if (login() == 1) {
        echo json_encode("Incorrect password or Email");
    } else {
        echo json_encode("Email doesnt exist in database");
    }
?>