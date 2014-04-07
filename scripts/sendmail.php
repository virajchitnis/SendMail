<?php
	if (isset($_POST['json'])) {
		$json = $_POST['json'];
		
		$email = json_decode($json, true);
		
		$headers = 'From: '.$email['from']."\r\n".
		    'Reply-To: '.$email['from']."\r\n".
		    'X-Mailer: PHP/'.phpversion();

		if (mail($email['to'], $email['subject'], $email['message'], $headers)) {
			echo "Your message has successfully been sent.";
		}
		else {
			echo "Your message was not sent, please try again later.";
		}
	}
	else {
		echo "No data.";
	}
?>