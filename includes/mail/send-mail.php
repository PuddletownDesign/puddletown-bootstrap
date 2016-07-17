<?php

require 'PHPMailer/PHPMailerAutoload.php';

$body = <<<EOD
sent from thepressureking.com landing page
----------------------------------------

name: $name
email: $email
phone: $phone
address: $address
zip: $zip

services: $services

----------------------------------------
EOD;

$recipient = 'owner@thepressureking.com';

$mail = new PHPMailer;
$mail->From = $email;
$mail->FromName = "The Pressure King";
$mail->Subject = "Quote Request from The Pressre King";
$mail->addAddress($recipient, $name);
$mail->isHTML(false);

$mail->Body = $body;

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} 
else {
	$sent = true;
}


?>