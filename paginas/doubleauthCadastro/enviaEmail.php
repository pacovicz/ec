<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/SMTP.php';
    session_start();
    $emailDestinatario = $_SESSION['cad_email'];
    $numeroDeAutenticacao = rand(10000, 90000);
    $_SESSION['codigoVerificacao'] = $numeroDeAutenticacao;

    $mail = new PHPMailer();
    // Configuração
    $mail->IsSMTP();
    $mail->Mailer = "smtp";
    $mail->IsSMTP(); 
	$mail->CharSet = 'UTF-8';   
	$mail->SMTPDebug = 0;
	$mail->SMTPAuth = true;     
	$mail->SMTPSecure = 'ssl'; 
    $mail->Host = 'smtp.gmail.com'; 
	$mail->Port = 465;
    $emailDestinatario = $_SESSION['cad_email'];
    // Detalhes do envio de E-mail
	$mail->Username = 'ec.cybersec@gmail.com'; 
	$mail->Password = '@Temp123';
	$mail->SetFrom('ec.cybersec@gmail.com', 'EC');
    $mail->addAddress($emailDestinatario,'');
	$mail->Subject = "Verification code from EC";
	$mail->msgHTML("Your code is: ". $numeroDeAutenticacao);
    $mail->send();
    echo json_encode($_SESSION['cad_email']);

?>    