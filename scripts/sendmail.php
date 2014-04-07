<?php
	if (isset($_POST['json'])) {
		$json = $_POST['json'];
		
		$email = json_decode($json, true);
		
		print_r($email);
	}
	else {
		echo "No data.";
	}
?>