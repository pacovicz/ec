<?php
	function descriptografar($data){
		$chave = $_POST['chave'];

		$conteudo_chave = file_get_contents("chave_privada.pem");
	
		$chave_privada = openssl_pkey_get_private($conteudo_chave);
	
		openssl_private_decrypt( base64_decode($chave), $chave, $chave_privada);
	
		$chave = trim($chave, '"');
	
		$iv = $_POST["iv"];
	
		$mensagem_decrypt = openssl_decrypt($data, 'aes-128-cbc', $chave,  OPENSSL_ZERO_PADDING, $iv);
	
		return $mensagem_decrypt;
	}
	
	$descriptografado = descriptografar($_POST['message']);

	echo $descriptografado;
?>