<?php
$error = false;

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$zip = $_POST['zip'];
$services = $_POST['services'];

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

if ($phone == "") {
	$phoneError = "Please fill in your phone number";
	$error = true;
}
if ($address == "") {
	$addressError = "Please fill in your Address";
	$error = true;
}
if ($zip == "") {
	$zipError = "Please fill in the Zip Code";
	$error = true;
}

?>