<?php
	if (isset($_POST['json'])) {
		$json = $_POST['json'];
		
		$email = json_decode($json, true);
		
		$headers = 'From: '.$email['from']."\r\n".
		    'Reply-To: '.$email['from']."\r\n".
			'Content-type: text/html; charset=utf-8'."\r\n".
		    'X-Mailer: SendMail '.exec("git describe").' by Viraj Chitnis';

		if (mail($email['to'], $email['subject'], $email['message'], $headers)) {
			echo "Your message has been sent successfully.";
		}
		else {
			echo "Your message could not be sent, please try again later.";
		}
	}
	else {
		echo "No data.";
	}
?>