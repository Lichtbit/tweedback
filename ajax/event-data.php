<?php
/**
 *
 * Returns a JSON object of event data. The object have the upcoming
 * structure:
 *
 *  success         boolean
 *  event           object
 *  cacheEventData  string
 *  cloudMessages   array
 *  meterMessages   array
 *  meterStatus     object
 *  lecturer        boolean
 *
 *
 * Use POST parameters to manipulate the result:
 *
 *  accessKey       string   Event's access key
 * Or
 *  eventId         int      Event's ID
 */


// if we are included, we don't need the init
if (!defined('ACCESS_KEY') && !defined('EVENT_ID')) {

	// include basics
	if (!@include_once 'init.php') {
		die (json_encode(array('success' => false)));
	}
}

// check for valid parameter
if ((isset($_POST['accessKey']) && !empty($_POST['accessKey']))
	|| isset($_POST['eventId']) || defined('ACCESS_KEY')
	|| defined('EVENT_ID')) {

	if (isset($_POST['accessKey'])) {
		$_accessKey = mb_strtolower(trim($_POST['accessKey']), 'UTF-8');
		$_eventId = '';
	} elseif (defined('ACCESS_KEY')) {
		$_accessKey = ACCESS_KEY;
		$_eventId = '';
	} else {

		$_accessKey = '';

		if (isset($_POST['eventId'])) {
			$_eventId = $_POST['eventId'];
		} elseif (defined('EVENT_ID')) {
			$_eventId = EVENT_ID;
		} else {
			$_eventId = '';
		}
	}

	// get event data
	$event = $db->getFirstRow("
		SELECT `id`, `name`, `accessKey`, `created`
		FROM `events`
		WHERE
			`accessKey` = '".$db->escape($_accessKey)."'
		OR
			`id` = '".$db->escape($_eventId)."'
		LIMIT 1;");

	if (!$event) {
		sendError(TYPE_USER, _('There was an unknown access key given in the request'),
			sprintf(_('Couldn\'t find event %s'), '<em>'.$_accessKey.'</em>'),
			sprintf(_('There is no event with the given access key %s. Please check whether you spelt it correctly and try to participate again.'), '<em>'.$_accessKey.'</em>')
		);
	}


	// set a new userid if necessary
	if (!isLecturerUser($event['id'])) {
		getUserId($event['id']);
	}

	// get user number
	$event['listenerNumber'] = getUserCount($event['id']);

	// build json output
	// syntax http://wiki.mgvmedia.com/de/tweedback/ajax#ajaxevent-dataphp

	$jsonOutput['success'] = true;


	// define cache path
	if (isLecturerUser($event['id'])) {
		$jsonOutput['cacheEventData'] = false;
	} else {
		$jsonOutput['cacheEventData'] = getEventCacheURL($event['id']);
	}


	$jsonOutput['event']	= $event;
	$jsonOutput['lecturer']	= isLecturerUser($event['id']);


	// get meter status
	if (!isLecturerUser($event['id'])) {
		$jsonOutput['meters'] = array();

		foreach ($tb_config['meters'] as $meter) {

			$meterResult = $db->getFirstRow("
				SELECT `status`
				FROM `meter-messages`
				WHERE `userId` = '".getUserId($event['id'])."'
				AND `typeId` = '".$meter['id']."'
				AND `eventId` = '".$event['id']."'
				ORDER BY `set` DESC
				LIMIT 1;");

			if (!$meterResult) {
				$out['status'] = '0';
			} else {
				$out['status'] = ($meterResult['status'] == -1)? '-' : '+';
			}
			$jsonOutput['meters'][$meter['name']] = $out;
		}
	}

	$categoriesCache = array();
	foreach ($tb_config['categories'] as $catConfig) {
		$categoriesCache[$catConfig['id']] = $catConfig['name'];
	}


	$messages = $db->getRows("
		SELECT
			`c`.`text` AS `text` ,
			`m`.`contentId` AS `contentId` ,
			COUNT( `m`.`contentId` ) AS `count`
		FROM `messages` `m`
		JOIN `contents` `c` ON `m`.`contentId` = `c`.`id`
		WHERE `m`.`eventId` = '".$event['id']."'
		GROUP BY `m`.`contentId`
		;");


	$jsonOutput['cloudMessages'] = array();
	for ($i = 0; $i < count($messages); $i++) {
		$message = $messages[$i];


		// get first message
		$messageFirst = $db->getFirstRow("
		SELECT
			`sent`,
			`userId`,
			`id`
		FROM `messages`
		WHERE `contentId` = '".$message['contentId']."'
		AND `eventId` = '".$event['id']."'
		AND `supported` IS NULL
		ORDER BY `sent`
		LIMIT 1
		;");

		if (!isset($message['later'])) {
			// check message banned or blocked or later
			$bucket = $db->getFirstRow("
				SELECT `type`, `moved`
				FROM `buckets`
				WHERE `messageId` = '".$messageFirst['id']."'
				ORDER BY `moved` DESC
				LIMIT 1;");

			if ($bucket !== false) {
				if ($tb_config['buckets'][(int) $bucket['type']] == 'later') {


					$message['later'] = strtotime($bucket['moved']);

					$searchI = count($messages)-1;
					while (isset($messages[$searchI]['later'])
					&& $messages[$searchI]['later'] > $message['later']) {
						$messages[$searchI+1] = $messages[$searchI];
						--$searchI;
					}
					$messages[$searchI+1] = $message;
					continue;
				} else {
					continue;
				}
			}
		}

		// check categories
		$messageInfos = $db->getRows("
		SELECT
			`c`.`categoryId` AS `categoryId`
		FROM `messages` `m`
		LEFT JOIN `categories` `c`
		ON `c`.`messageId` = `m`.`id`
		WHERE `m`.`contentId` = '".$message['contentId']."'
		AND `m`.`eventId` = '".$event['id']."'
		GROUP BY `c`.`categoryId`
		;");

		$cats = array();
		foreach ($messageInfos as $info) {

			if (!is_null($info['categoryId'])) {
				if (!isset($categoriesCache[$info['categoryId']])) {
					$jsonOutput['warnings'][] = sprintf(_('Category id %s is not defined.'), $info['categoryId']);
				} else {
					if (!in_array($categoriesCache[$info['categoryId']], $cats)) {
						$cats[] = $categoriesCache[$info['categoryId']];
					}
				}
			}
		}


		$jsonOutput['cloudMessages'][] = array(
			'id'			=> $messageFirst['id'],
			'text'			=> $message['text'],
			'priority'		=> getPriority($event['id'], $message['count']),
			'sent'			=> $messageFirst['sent'],
			'username'			=> getUsername($messageFirst['userId']),
			'categories'	=> $cats,
			'debugCount'	=> $message['count'],
		);
	}

	// meter messages
	$jsonOutput['meterMessages'] = array();

	// speed meter - tooFast
	$meterSpeed = calculateMeterMessage($event['id'], 'tooFast');
	if ($meterSpeed !== false) {
		$jsonOutput['meterMessages'][] = array(
			'meterName' => 'speed',
			'priority'=> abs($meterSpeed),
			'type'=> 'meterStatus',
			'text' => sprintf(_('Too fast (%s)'), abs($meterSpeed)),
			'value' => 'tooFast',
		);
	}

	// speed meter - tooSlow
	$meterSpeed = calculateMeterMessage($event['id'], 'tooSlow');
	if ($meterSpeed !== false) {
		$jsonOutput['meterMessages'][] = array(
			'meterName' => 'speed',
			'priority'=> abs($meterSpeed),
			'type'=> 'meterStatus',
			'text' => sprintf(_('Too slow (%s)'), abs($meterSpeed)),
			'value' => 'tooSlow',
		);
	}

	// understanding meter
	$meterUnderstanding = calculateMeterMessage($event['id'], 'unclear');

	if ($meterUnderstanding !== false) {
		$jsonOutput['meterMessages'][] = array(
			'meterName' => 'understanding',
			'priority'=> abs($meterSpeed),
			'type'=> 'meterStatus',
			'text' => sprintf(_('Something is unclear (%s)'), abs($meterUnderstanding)),
			'value' => 'unclear',
		);
	}

	$json = json_XSS_encode($jsonOutput);

	echo $json;

	// report a user activity
	if (!isLecturerUser($event['id'])) {
		userActivity(getUserId(), $event['id']);
	}

	// delete non static value
	$jsonOutput['lecturer'] = false;
	unset($jsonOutput['meters']);
	setEventCache($event['accessKey'], $event['id'], $json);

	exit();

} else {
	sendError(TYPE_USER, _('There was no access key given in the request'),
		_('Please enter the access key of the desired event'),
		_('Each event has an access key. If you want to participate as a listener, you need to know this key, which was determined by the event\'s initiator.')
	);
}
