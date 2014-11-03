<?php
/**
 *
 * Returns a JSON object of user settings. The object have the upcoming
 * structure:
 *
 *  success        boolean
 *  username       string
 *  anonymous      boolean
 *
 */

// include basics
if (!@include_once 'init.php') {
	die (json_encode(array('success' => false)));
}

// success
$jsonOutput['success'] = true;

// retrieve username
$username = getUsername();

// set username or anonymous
$jsonOutput['username'] = (is_null($username))? _('Anonymous') : $username;

// set boolean anonymous
$jsonOutput['anonymous'] = is_null($username);

// send data to browser
echo json_XSS_encode($jsonOutput);
