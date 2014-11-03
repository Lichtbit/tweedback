<?php
/**
 * Set the meter status of a listener
 *
 * Normaly returns a the JSON event data
 *
 *
 * Use POST parameter to set the status
 *
 *  eventId     integer      Event's ID
 *  name        string       Name of the meter
 *  status      string       New status
 */

// include basics
if (!@include_once 'init.php') {
	die (json_encode(array('success' => false)));
}

// check parameter
if (isset($_POST['eventId'], $_POST['name'], $_POST['status'])) {

	// get POST parameter
	$_eventId = $_POST['eventId'];
	$_name = $_POST['name'];
	$_status = $_POST['status'];


	// check event id
	$eventId = checkEventId($_eventId);

	// check for lecturer
	checkNoLecturer($eventId);

	// check for meter name
	$meterConfig = false;
	foreach ($tb_config['meters'] as $meter) {
		if ($meter['name'] == $_name) {
			$meterConfig = $meter;
			break;
		}
	}

	// meter have to be set
	if ($meterConfig === false) {
		sendError(TYPE_SYSTEM, 'Unknown meter name');
	}

	// check status
	switch ($_status) {

	case '-':
		$dbStatus = -1;
		break;


	case '0':
		$dbStatus = 0;
		break;

	case '+':
		if ($meterConfig['name'] == 'speed') {
			$dbStatus = 1;
			break;
		}
	default:
		sendError(TYPE_SYSTEM, 'Unknown meter status');
		break;
	}

	// save the meter status
	$result = $db->insertRow('meter-messages', array(
		'eventId'	=> $eventId,
		'typeId'	=> $meterConfig['id'],
		'userId'	=> getUserId($eventId),
		'status'	=> $dbStatus,
	));

	if (!$result) {
		sendError(TYPE_SYSTEM, 'Database operation failed');
	}

	// send event data object
	define('EVENT_ID', $eventId);
	include('event-data.php');

} else {
	sendError(TYPE_SYSTEM, 'Unknown form data for message sending');
}
