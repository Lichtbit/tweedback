<?php
/**
 * Save the message from a listener
 *
 * Normaly returns a the JSON event data
 *
 *
 * Use POST parameter to send a new message:
 *
 *  eventId     integer      Event's ID
 *  type        integer      Message type
 *  text        string       Content
 *
 * Or use POST parameter to send a supporting message:
 *
 *  eventId     integer      Event's ID
 *  messageId   integer      Message's ID
 */

// include basics
if (!@include_once 'init.php') {
	die (json_encode(array('success' => false)));
}

// first check of parameter for message with text
if (isset($_POST['eventId'], $_POST['text'])) {

	// get POST's parameter
	$_eventId = $_POST['eventId'];
	$_text = $_POST['text'];


	// check event id
	$event = $db->getFirstRow("
		SELECT `id`
		FROM `events`
		WHERE `id` = '".$db->escape($_eventId)."'
		LIMIT 1;");

	// if event is not defined we send a fail
	if (!$event) {
		sendError(TYPE_SYSTEM, 'Unknown event id');
	}

	// if we are the lecturer we send a fail
	if (isLecturerUser($event['id'])) {
		sendError(TYPE_SYSTEM, 'Lecturers are not allowed to send messages');
	}

	// if the text is empty we send a fail
	if (empty($_text)) {
		sendError(TYPE_USER, 'Empty text message',
			_('Missing Question'),
			_('Please enter a short question or a single term to ask for it.')
		);
	}

	// user banned?
	checkBanned($event['id']);

	// check for content exists
	$result = $db->getFirstRow("
		SELECT `id`
		FROM `contents`
		WHERE `text` = '".$db->escape($_text)."'
		LIMIT 1;");

	// content exists
	if ($result !== false) {
		$contentId = $result['id'];

		// check content banned
		$banned = $db->getFirstRow("
			SELECT `m`.`id`
			FROM `messages` `m`
			JOIN `buckets` `b` ON `b`.`messageId` = `m`.`id`
			WHERE `m`.`eventId` = '".$event['id']."'
			AND `b`.`type` = '1'
			AND `m`.`contentId` = '".$contentId."'
			LIMIT 1;
		");

		// if content is banned we send a fail
		if ($banned !== false) {
			sendError(TYPE_USER, 'Banned text message',
				_('Undesired Question'),
				_('The lecturer baned this question.')
			);
		}

	// content didn't exists
	} else {

		// save text
		$contentId = $db->insertRow('contents', array(
			'text' => $_text
			));

		// if text could't save we send a fail
		if ($contentId === false) {
			sendError(TYPE_SYSTEM, 'Database operation failed (unable to save message)');
		}
	}

	// save this message
	$newMessageId = $db->insertRow('messages', array(
		'eventId'	=> $_eventId,
		'contentId'	=> $contentId,
		'userId'	=> getUserId($event['id'])
	));


	// if message couldn't save we send a fail
	if (!$newMessageId) {
		sendError(TYPE_SYSTEM, 'Database operation failed (unable to save message)');
	}

	// save categories
	if (isset($_POST['categories'])) {
		$_categories = $_POST['categories'];

		if (!is_array($_categories)) {
			$_categories = array($_categories);
		}

		// save every category for his own
		foreach ($_categories as $cat) {

			$catId = false;
			foreach ($tb_config['categories'] as $catConfig) {
				if ($catConfig['name'] == $cat) {
					$catId = $catConfig['id'];
					break;
				}
			}

			if ($catId === false) {
				$jsonOutput['warnings'][] = sprintf(_('Category %s is unknown.'), $cat);
			}

			// save category
			$res = $db->insertRow('categories', array(
				'messageId'		=> $newMessageId,
				'categoryId'	=> $catId,
			));

			if ($res === false) {
				$jsonOutput['warnings'][] = sprintf(_('Could not save category %s.'), $cat);
			}
		}
	}


	// send event data
	define('EVENT_ID', $_eventId);
	include('event-data.php');


// first check of parameter for a supporting message
} elseif (isset($_POST['messageId'], $_POST['eventId'])) {

	// get POST's parameter
	$_eventId = $_POST['eventId'];
	$_messageId = $_POST['messageId'];


	// check event id
	$event = $db->getFirstRow("
		SELECT `id`
		FROM `events`
		WHERE `id` = '".$db->escape($_eventId)."'
		LIMIT 1;");

	// if event is not defined we send a fail
	if (!$event) {
		sendError(TYPE_SYSTEM, 'Unknown event id');
	}

	// if we are the lecturer we send a fail
	if (isLecturerUser($event['id'])) {
		sendError(TYPE_SYSTEM, 'Lecturers are not allowed to send messages');
	}

	// check message id
	$message = $db->getFirstRow("
		SELECT `contentId`
		FROM `messages`
		WHERE `id` = '".$db->escape($_messageId)."'
		LIMIT 1;");

	// if message is not defined we send a fail
	if (!$message) {
		sendError(TYPE_SYSTEM, 'Unknown event id');
	}

	// save message
	$result = $db->insertRow('messages', array(
		'eventId'	=> $_eventId,
		'contentId'	=> $message['contentId'],
		'userId'	=> getUserId($_eventId),
		'supported'	=> $_messageId,
	));

	// if message couldn't save we send a fail
	if (!$result) {
		sendError(TYPE_SYSTEM, 'Database operation failed (unable to save message)');
	}

	// send event data
	define('EVENT_ID', $_eventId);
	include('event-data.php');

} else {

	// we send a fail
	sendError(TYPE_SYSTEM, 'Unknown form data for message sending');
}
