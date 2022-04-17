<?php
	session_start();
	$email = $_SESSION['email'];
	echo json_encode($email);
?>
		