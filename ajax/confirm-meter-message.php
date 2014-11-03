<?php

// include basics
if (!@include_once 'init.php') {
	die (json_encode(array('success' => false)));
}

if (isset($_POST['eventId'], $_POST['value'])) {

	$_eventId = $_POST['eventId'];
	$_value = $_POST['value'];

	// check event id
	$eventId = checkEventId($_eventId);

	// check for lecturer
	checkLecturer($eventId);

	// check for value
	if (!isset($tb_config['meterValues'][$_value])) {
		sendError(TYPE_SYSTEM, 'Unknown meter value');
	}

	$valueConfig = $tb_config['meterValues'][$_value];

	$result = $db->insertRow('meter-confirmations', array(
		'eventId'		=> $eventId,
		'valueId'		=> $valueConfig['id'],
	));

	if ($result === false) {
		sendError(TYPE_SYSTEM, 'Unable to confirm meter message');
	}


	define('EVENT_ID', $eventId);
	include('event-data.php');

} else {
	sendError(TYPE_SYSTEM, 'Invalid form data');
}
