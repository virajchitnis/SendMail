function changeTitle () {
	var subject = document.getElementById('mail_subject').value;
	
	if ((subject == null) || (subject == "")) {
		document.title = "SendMail";
		document.getElementById('message_title').innerHTML = "New Message";
	}
	else {
		document.title = "SendMail - " + subject;
		document.getElementById('message_title').innerHTML = subject;
	}
}

function showSignature () {
	document.getElementById('overlay_background').style.display = "block";
	document.getElementById('overlay_body').style.display = "block";
}

function hideSignature () {
	document.getElementById('overlay_background').style.display = "none";
	document.getElementById('overlay_body').style.display = "none";
}

function messageSend () {
	document.getElementById('response_message_div').style.display = "block";
}