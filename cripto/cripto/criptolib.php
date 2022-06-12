<?php
	function descriptografar($data){

		$chave = $data['chave'];

		$iv = $data['iv'];

		$conteudo_chave = file_get_contents("../../../cripto/cripto/chave_privada.pem");
	
		$chave_privada = openssl_pkey_get_private($conteudo_chave);
	
		openssl_private_decrypt(base64_decode($chave), $chave, $chave_privada);
		openssl_private_decrypt(base64_decode($iv), $iv, $chave_privada);
	
		$chave = trim($chave, '"');
		
		
		$criptografia = $data['message'];
	
		$iv = trim($iv, '"');
	
		$mensagem_decryt = openssl_decrypt($criptografia, 'aes-128-cbc', $chave,  OPENSSL_ZERO_PADDING, $iv);
		
		$mensagem = trim($mensagem_decryt);
    	$mensagem = json_decode($mensagem, true);

		return $mensagem;
	}
?>