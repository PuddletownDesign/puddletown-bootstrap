<?php

$slashes_in_url = 4; //2 for http:// and 1 for localhost/

$url = $_SERVER['REQUEST_URI'];
$url_array = explode('/', $url);
$array_count = count($url_array)-$slashes_in_url; 

$root = '';
for($i=0; $i < $array_count; $i++) { 
	$root .= '../';
}
if ($root=='') {
	$root = './';
}
?>