<?php
$error = false;

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//Check Require for blanks

if ($name == "") {
	$nameError = "Please fill in your name";
	$error = true;
} elseif(strlen($name) >= 75) {
	$nameError = "Ur name&#8217;s too long";
	$error = true;
}

if ($email == "") {
	$emailError = "What&#8217;s your email address?";
	$error = true;
} elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$emailError = "That&#8217;s not a real email address";
	$error = true;
}


if ($message =="") {
	$messageError = "You didn&#8217;t write anything&hellip;";
	$error = true;
} elseif(strlen($message) < 15) {
	$messageError = "WTF if you&#8217;re gonna contact us write something&hellip;";
	$error = true;
}

?>