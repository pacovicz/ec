<?php
	session_start();
	$email = $_SESSION['cad_email'];
	echo json_encode($email);
?>
		