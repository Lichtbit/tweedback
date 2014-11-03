<?php
/**
 * Save the user settings
 *
 * Normaly returns a the JSON user settings
 *
 *
 * Use POST parameter to set the user setttings:
 *
 *  username     string      Username
 *
 */

// include basics
if (!@include_once 'init.php') {
	die (json_encode(array('success' => false)));
}


// check parameter
if (isset($_POST['username'])) {
	$_username = trim($_POST['username']);

	// empty usernames aren't allow
	if (empty($_username)) {
		sendError(TYPE_USER, 'Empty Username', _('Empty Username'),
			_('Please enter a username with a minimum length of one character.'));
	}

// if no username is set, we set anonymous
} else {
	$_username = null;
}

// get user ID
$userId = getUserId();


if ($userId === false) {
	sendError(TYPE_SYSTEM, 'Couldn\'t find an ID for the user');
}

// save new username
$db->insertRow('usernames', array(
	'userId' => $userId,
	'username' => $_username,
));

// generate user setting data
$jsonOutput['success'] = true;
$username = getUsername();
$jsonOutput['username'] = (is_null($username))? _('Anonymous') : $username;
$jsonOutput['anonymous'] = is_null($username);

// send data to browser
echo json_XSS_encode($jsonOutput);
