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
                    return 1;
                }
            } while($linha = mysqli_fetch_assoc($dados));
            return 0;
        } else return 0;
    }
        
    require("dbconnect.php");
    if(mysqli_connect_errno()){
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    $username = $_POST["username"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $senhaHash = $_POST["senhaHash"];

    
    
    $username = mysqli_real_escape_string($con, $_POST["username"]);
    $cpf = mysqli_real_escape_string($con, $_POST["cpf"]);
    $email = mysqli_real_escape_string($con, $_POST["email"]);
    $senhaHash = mysqli_real_escape_string($con, $_POST["senhaHash"]);

    if(validarEmail() == 0){
        $insert_intoDB = "INSERT INTO cadastro (username, cpf, email, senhaHash) VALUES ('$username','$cpf','$email','$senhaHash')";
        mysqli_query($con, $insert_intoDB);
        echo json_encode("0");
    } else {
        echo json_encode("1");
    }

?>