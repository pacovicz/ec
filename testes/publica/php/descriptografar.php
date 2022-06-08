<?php
	
	
	$dados = $_POST["dados"];

	$conteudo_chave = file_get_contents("../chave/chave_privada.pem");

	$chave_privada = openssl_pkey_get_private($conteudo_chave);

	openssl_private_decrypt( base64_decode($dados), $mensagem, $chave_privada );

	echo $mensagem;


?>