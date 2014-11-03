<?php
/**
 * Put a given message into a bucket
 *
 * Normaly returns a the JSON event data
 *
 *
 * Use POST parameter to move the message:
 *
 *  eventId     integer      Event's ID
 *  messageId   integer      Message's ID
 *  bucket      string       Bucket name
 */

// include basics
if (!@include_once 'init.php') {
	die (json_encode(array('success' => false)));
}

// first check of parameter
if (isset($_POST['eventId'], $_POST['messageId'], $_POST['bucket'])) {

	// get POST's parameter
	$_eventId = $_POST['eventId'];
	$_messageId = $_POST['messageId'];
	$_bucket = $_POST['bucket'];


	// check event id
	$eventId = checkEventId($_eventId);

	// check for lecturer
	checkLecturer($eventId);

	// check for bucket name
	$bucketId = false;
	foreach ($tb_config['buckets'] as $id => $bucketName) {
		if ($bucketName == $_bucket) {
			$bucketId = $id;
			break;
		}
	}

	// if bucket is not defined we send a fail
	if ($bucketId === false) {
		sendError(TYPE_SYSTEM, 'Unknonw bucket name');
	}

	// check message id
	$message = $db->getFirstRow("
		SELECT `id`
		FROM `messages`
		WHERE `id` = '".$db->escape($_messageId)."'
		LIMIT 1;");

	// if message didn't found we send a fail
	if (!$message) {
		sendError(TYPE_SYSTEM, 'Unknonw message id');
	}

	// insert the message move
	$result = $db->insertRow('buckets', array(
		'type'		=> $bucketId,
		'messageId'	=> $message['id'],
	));

	// if the message could't save we send a fail
	if (!$result) {
		sendError(TYPE_SYSTEM, 'Bucket database operation failed');
	}

	// send event data
	define('EVENT_ID', $eventId);
	include('event-data.php');

} else {

	// we send a fail
	sendError(TYPE_SYSTEM, 'Unknown form data');
}
