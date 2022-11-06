<?php

$api_key = "4U10-9KZW-U1BI-5ALK";
$subdomain = "4svillas";

// API
require_once('Wufoo/WufooApiWrapper.php');

// Wufoo
$wrapper = new WufooApiWrapper($api_key, $subdomain);

$postArray = array();
foreach ($_POST as $key => $value) {
	$postArray[] = new WufooSubmitField($key, $value);
}

try {
	$result = $wrapper->entryPost('r1rfzfs01xlvmsv', $postArray);
	if (!$result->Success) {
		foreach ($result->FieldErrors as $key => $value) {
			$fieldError[$value->ID] = $value->ErrorText;
		}
	}
} catch (Exception $e) {
    //Read the error message.
}