<?php
/**
 * Create an event
 *
 * Normaly returns a the JSON event data object
 *
 *
 * Use POST parameter to create an event:
 *
 *  name          string       Name of the event
 *  accessKey     string       Access key of the event
 *  emailAddress  string       Email address for the report
 *  duration      int          Duration of the event in hours
 */

// include basics
if (!@include_once 'init.php') {
	die (json_encode(array('success' => false)));
}

// check parameter
if (isset($_POST['name'], $_POST['accessKey'], $_POST['emailAddress'], $_POST['duration'])) {

	// get POST parameter
	$_name				= trim($_POST['name']);
	$_accessKey			= mb_strtolower(trim($_POST['accessKey']), 'UTF-8');
	$_emailAddress		= trim($_POST['emailAddress']);
	$_duration			= (int) trim($_POST['duration']);

	// check data
	$defaultText = _('Please check your input and try again.');
	if (empty($_name)) {
		sendError(TYPE_USER, _('Name is empty'),
			_('Event Name Must Not Be Empty'),
			$defaultText
		);
	}
	if (empty($_accessKey)) {
		sendError(TYPE_USER, _('Access Key is empty'),
			_('Event Code Must Not Be Empty'),
			$defaultText
		);
	}
	if (!empty($_emailAddress) && !preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/', $_emailAddress)) {
		sendError(TYPE_USER, _('Empty Email Address'),
			_('Email Address Has to Be Valid or Empty'),
			$defaultText
		);
	}

	// first check for available access key
	$event = $db->getFirstRow("
		SELECT `id`
		FROM `events`
		WHERE `accessKey` = '".$db->escape($_accessKey)."'
		LIMIT 1;");

	/*
	 * If the access key is in use, we try to generate a free one
	 */
	if ($event !== false) {

		$i = 0;
		do {
			$i ++;
			// generate available access key
			$event = $db->getFirstRow("
				SELECT `id`
				FROM `events`
				WHERE `accessKey` = '".$db->escape($_accessKey)."-".$i."'
				LIMIT 1;");
		} while($event !== false);

		// send a other access key
		die(json_XSS_encode(array(
			'success' => false,
			'possibleAccessKey' => $_accessKey.'-'.$i,
			'problem' => array(
				'header' => _('Given Event Code Is Not Available'),
				'type' => TYPE_USER,
				'text' => '',
			),
			'message' => sprintf(
				_('The given event code is not available at the moment. You can '
				 ."take the following or choose another one.\n\nSuggestion: %s"),
				$_accessKey.'-'.$i))
		));
	}

	// generate a cookie hash
	$shuffleLecturerCookie = md5(rand());

	// insert new event
	$result = $db->insertRow('events', array(
		'name'				=> $_name,
		'accessKey'			=> $_accessKey,
		'emailAddress'		=> $_emailAddress,
		'selectedAccessKey'	=> $_accessKey,
		'lecturerCookie'		=> $shuffleLecturerCookie,
		'duration'			=> $_duration,
	));

	if (!$result) {
		sendError(TYPE_SYSTEM, _('Insertion into database failed'));
	}

	// set the lecturer cookie
	setLecturerUser($result, $shuffleLecturerCookie);

	// get event data object
	define('EVENT_ID', $result);
	include('event-data.php');

} else {
	sendError(TYPE_SYSTEM, _('Incomplete form data'));
}
