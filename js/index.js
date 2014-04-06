var xmlhttp = new XMLHttpRequest();

function Message () {
	this.from;
	this.to;
	this.subject;
	this.message;
}

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
	var signature = document.getElementById('signature_text').value;
	var message = document.getElementById('message_text').value;
	
	if (!((message == null) || (message == ""))) {
		document.getElementById('message_text').value = message + "\n\n" + signature;
	}
	
	document.getElementById('overlay_background').style.display = "none";
	document.getElementById('overlay_body').style.display = "none";
}

function messageSend () {
	var message_form = document.getElementById('message_form');
	var email = new Message();
	
	email.from = message_form.elements[0].value;
	email.to = message_form.elements[1].value;
	email.subject = message_form.elements[2].value;
	email.message = message_form.elements[3].value;
	
	var jsonified = JSON.stringify(email);
	
	xmlhttp.onreadystatechange = dataPosted();
	xmlhttp.open("POST", "scripts/sendmail.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("json=" + jsonified);
	
	document.getElementById('response_message_div').style.display = "block";
}

function dataPosted () {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		document.getElementById("response_message").innerHTML = xmlhttp.responseText;
	}
 }