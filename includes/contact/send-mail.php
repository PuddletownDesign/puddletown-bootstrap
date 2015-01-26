<?php

require_once "Mail.php";
if (class_exists('Mail')) {
	
	/** 
	 * make basic message body
	 */
	$body = <<<EOD
sent from bathpartyband.com contact form	
----------------------------------------

$name writes,

$message

----------------------------------------
$email

EOD;

	
	//if all goes well then mail and submit the form
	#$recipient = 'brent@puddletowndesign.com';
	$recipient = 'bathpartyband@gmail.com';
	$headers['From'] = $email;
	$headers['To'] = $recipient; 
	$headers['Subject'] = 'email from bathpartyband.com';
	
	$params['host'] = "bathpartyband.com";
	$params['port'] = 25;
	$mail = Mail::factory('smtp', $params);
	$mail->send($recipient, $headers, $body);
	$sent = true;	
} 
else {
	$error = true;
}

?>