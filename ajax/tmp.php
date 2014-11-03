<?php
/**
 * Normaly returns a the JSON event data object
 *
 * If there is a temp version we use it. Otherwise we generate a new
 * object.
 *
 * Use GET parameter to set the status
 *
 *  eventId     integer      Event's ID
 */

// check for event id
if (isset($_GET['eventId']) && is_numeric($_GET['eventId'])) {

	// path to temp version
	$temp = 'tmp/'.$_GET['eventId'].'/json';

	// check temp version
	if (is_file($temp) && filesize($temp) > 0) {
		// send temp version
		die(file_get_contents($temp));

	} else {

		// generate new output
		$_POST['eventId'] = $_GET['eventId'];
		include('event-data.php');
	}

} else {
	sendError(TYPE_SYSTEM, 'Unknown event id');
}
