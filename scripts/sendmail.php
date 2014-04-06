<?php
	if (isset($_POST['json'])) {
		$json = $_POST['json'];
		
		echo $json;
	}
	else {
		echo "No data.";
	}
?>