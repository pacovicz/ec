<?php
    function validarEmail(){
        global $email, $con;
        $query = sprintf("SELECT email FROM cadastro");
        $dados = mysqli_query($con, $query);
        $linha = mysqli_fetch_assoc($dados);
        $total = mysqli_num_rows($dados);
        if ($total > 0){
            do {
                if($linha['email'] == $email){
                    return "Email already taken";
                }
            } while($linha = mysqli_fetch_assoc($dados));
            return "Success";
        } else return "Success";
    }
        
    include("../../../dbconnect/dbconnect.php");
    if(mysqli_connect_errno()){
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    session_start();
    
    include('../../../cripto/cripto/criptolib.php');
    $mensagem = descriptografar($_POST['message']);

    $username = $mensagem["username"];
    $cpf = $mensagem["cpf"];
    $email = $mensagem["email"];
    $senhaHash = $mensagem["senhaHash"];
    
    $_SESSION['cad_username'] = $username;
    $_SESSION['cad_cpf'] = $cpf;
    $_SESSION['cad_email'] = $email;
    $_SESSION['cad_senhaHash'] = $senhaHash;
    $_SESSION['cad_autenticado'] = "false";

    if(validarEmail() == "Success"){
        echo json_encode("Success");
    } else {
        echo json_encode("Email already taken");
    }

?>