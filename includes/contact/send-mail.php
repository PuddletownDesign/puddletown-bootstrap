<?php

require_once "Mail.php";
if (class_exists('Mail')) {
	
	/** 
	 * make basic message body
	 */
	$body = <<<EOD
sent from your website contact form	
----------------------------------------

$name writes,

$message

----------------------------------------
$email

EOD;

	
	//if all goes well then mail and submit the form
	$recipient = 'you@yoursite.com';
	$headers['From'] = $email;
	$headers['To'] = $recipient; 
	$headers['Subject'] = 'email from your website';
	
	$params['host'] = "you@yoursite.com";
	$params['port'] = 25;
	$mail = Mail::factory('smtp', $params);
	$mail->send($recipient, $headers, $body);
	$sent = true;	
} 
else {
	$error = true;
}

?>