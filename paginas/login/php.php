<?php
    require("dbconnect.php");
    if(mysqli_connect_errno()){
        echo "conexão com a database falhou!: ". mysqli_error();
    }
    $email = $_POST["email"];
    $senhaHash = $_POST["senhaHash"];
    $query = sprintf("SELECT email, senhaHash FROM cadastro");
    $dados = mysqli_query($con, $query);
    $linha = mysqli_fetch_assoc($dados);
    $total = mysqli_num_rows($dados);
?>    
    <?php
	// se o número de resultados for maior que zero, mostra os dados
	if($total > 0) {
		// inicia o loop que vai mostrar todos os dados
		do {
    ?>
    <?php
            if ($linha['email'] == $email) {
                echo "ACHEI!!!";
                if ($linha['senhaHash'] == $senhaHash) {
                    echo "<br> E CONSEGUI LOGAR PORRA!!!";
                } else {
                    echo "<br> mas a senha falhou tlg...";
                }
            } 
    ?>  
			<p><?=$linha['email']?> / <?=$linha['senhaHash']?></p>
      
    <?php
		// finaliza o loop que vai mostrar os dados
		}while($linha = mysqli_fetch_assoc($dados));
	// fim do if
	}
    ?>