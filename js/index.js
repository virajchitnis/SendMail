var notificationTimer = null;

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
		document.title = subject + " - SendMail";
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
	
	if (!((signature == null) || (signature == ""))) {
		document.getElementById('message_text').value = message + "\n\n" + signature;
	}
	
	document.getElementById('overlay_background').style.display = "none";
	document.getElementById('overlay_body').style.display = "none";
}

function messageSend () {
	var message_form = document.getElementById('message_form');
	var email = new Message();
	
	for (var i = 0; i < message_form.length; i++) {
		if (message_form.elements[i].value == null || message_form.elements[i].value == "") {
			document.getElementById("response_message").innerHTML = "No fields can be blank";
			document.getElementById('response_message_div').style.display = "block";
			
			if (notificationTimer == null) {
				notificationTimer = setInterval(timeTracker, 10000);
			}
			else {
				clearInterval(notificationTimer);
				notificationTimer = setInterval(timeTracker, 10000);
			}
			return false;
		}
	}
	
	email.from = message_form.elements[0].value;
	email.to = message_form.elements[1].value;
	email.subject = message_form.elements[2].value;
	email.message = message_form.elements[3].value;
	
	var jsonified = JSON.stringify(email);
	
	var params = "json=" + jsonified;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "scripts/sendmail", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.setRequestHeader("Content-length", params.length);
	xmlhttp.setRequestHeader("Connection", "close");
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			for (var i = 0; i < message_form.length; i++) {
				message_form.elements[i].value = "";
			}
			
			document.title = "SendMail";
			document.getElementById('message_title').innerHTML = "New Message";
			document.getElementById("response_message").innerHTML = xmlhttp.responseText;
			document.getElementById('response_message_div').style.display = "block";
			
			if (notificationTimer == null) {
				notificationTimer = setInterval(timeTracker, 30000);
			}
			else {
				clearInterval(notificationTimer);
				notificationTimer = setInterval(timeTracker, 30000);
			}
		}
		else {
			document.getElementById("response_message").innerHTML = "Error, try again.";
			document.getElementById('response_message_div').style.display = "block";
		}
	}
	xmlhttp.send(params);
}


function timeTracker () {
	clearInterval(notificationTimer);
	document.getElementById('response_message_div').style.display = "none";
}

function displayVersion () {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "scripts/version", true);
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("version_display").innerHTML = " " + xmlhttp.responseText + " ";
		}
		else {
			document.getElementById("version_display").innerHTML = " ";
		}
	}
	xmlhttp.send();
}