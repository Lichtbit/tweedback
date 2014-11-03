<?php
/**
 * This file contains functions for ajax requests.
 */



/**
 * return json string xss safe
 *
 * @param mixed $data mixed data
 * @param boolean $json return as json
 * @return mixed
 */
function json_XSS_encode($data, $json = true) {
	if (is_array($data)) {
		foreach ($data as $key => $value) {
			$data[$key] = json_XSS_encode($value, false);
		}
	} elseif (is_object($data)) {
		$data = (array) $data;
		foreach ($data as $key => $value) {
			$data[$key] = json_XSS_encode($value, false);
		}
		$data = (object) $data;
	} elseif (is_string($data)) {
		$data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
	}

	if ($json) {
		return json_encode($data);
	} else {
		return $data;
	}
}


/**
 * Stops processing flow and sends an error message
 *
 * @param string $type  Either user or system
 * @param unknown_type $details  A technical error message describing the problem
 * @param unknown_type $header  A headline for the user to understand the problem
 * @param unknown_type $text  A short text for the user describing what to do
 */
function sendError($type, $details, $header = '', $text = '')  {
	die(json_encode(array(
		'success' => false,
		'problem' => array(
			'header' => $header,
			'type' => $type,
			'text' => $text,
			'details' => $details,
		),
		'message' => $header,
	)));
}

/**
 * Returns the user id
 *
 * If the user didn't have a user id he will get one.
 *
 * @param int $eventId Event id to particapate the user
 * @return int
 */
function getUserId($eventId = null) {
	global $db;

	// check user cookie
	if (!isset($_COOKIE[COOKIE_KEY_START.COOKIE_KEY_USER])) {

		// no cookie is set. We create one.
		$userId = setNewUser();

	} elseif (substr($_COOKIE[COOKIE_KEY_START.COOKIE_KEY_USER], 0, strlen(COOKIE_USER_START)) == COOKIE_USER_START) {

		// explode the user id
		$userId = substr($_COOKIE[COOKIE_KEY_START.COOKIE_KEY_USER], strlen(COOKIE_USER_START));
		if (!is_numeric($userId)) {
			$userId = false;
		}
	} else {
		$userId = false;
	}

	if ($userId === false) {
		// A wrong cookie is set. We create a new one.
		$userId = setNewUser();

	}

	if ($userId !== false) {
		if ($eventId !== null) {

			// check for participations
			$user = $db->getFirstRow("
				SELECT `userId`
				FROM `participations`
				WHERE `eventId` = '".$db->escape($eventId)."'
				AND `userId` = '".$db->escape($userId)."'
				LIMIT 1;");

			if ($user === false) {

				// add participations for this user
				$db->insertRow('participations', array(
					'eventId' => $eventId,
					'userId' => $userId,
				));
			}
		}
		return $userId;
	} else {
		return false;
	}
}

/**
 * Check current user for be a lecturer
 *
 * @param int $eventId Event's ID
 * @return boolean is current user the lecturer
 */
function isLecturerUser($eventId) {
	global $db;
	static $lecturerUser;

	// check cache
	if (isset($lecturerUser)) {
		return $lecturerUser;
	}

	// check for cookie
	if (!isset($_COOKIE[COOKIE_KEY_START.$eventId])) {
		return false;
	}

	// get lecturer hash from db
	$result = $db->getFirstRow("
		SELECT `lecturerCookie`
		FROM `events`
		WHERE `id` = '".$db->escape($eventId)."'
		LIMIT 1;");

	if ($result === false) {
		return false;
	}

	// check hash value
	$lecturerUser = ($_COOKIE[COOKIE_KEY_START.$eventId] == $result['lecturerCookie']);
	return $lecturerUser;
}

/**
 * Sets the current user to be the lecturer
 *
 * @param int $eventId Event's ID
 * @param string $lecturerCookie Hash for the cookie
 * @return boolean
 */
function setLecturerUser($eventId, $lecturerCookie) {

	// set the cookie
	$cookie = @setcookie(COOKIE_KEY_START.$eventId, $lecturerCookie, COOKIE_TIME_EXPIRE);
	if ($cookie === false) {
		return false;
	}
	// set in the var
	$_COOKIE[COOKIE_KEY_START.$eventId] = $lecturerCookie;

	return true;
}

/**
 * Sets a new user by generate a cookie and insert the value into db
 *
 * @return int user ID
 */
function setNewUser() {
	global $db;

	// create a new user in the table
	$userId = $db->insertRow('users', array(
		'id' => null
	));

	if ($userId === false) {
		return false;
	}

	// set the cookie
	$cookie = @setcookie(COOKIE_KEY_START.COOKIE_KEY_USER, COOKIE_USER_START.$userId, COOKIE_TIME_EXPIRE);
	if ($cookie === false) {
		return false;
	}

	// set in the var
	$_COOKIE[COOKIE_KEY_START.COOKIE_KEY_USER] = COOKIE_USER_START.$userId;

	// return the new id
	return $userId;
}

/**
 * Returns the current count of listeners for the event
 *
 * @param int $eventId Event's ID
 * @return int count of listeners
 */
function getUserCount($eventId) {
	global $db;
	static $count;

	// check cache
	if (isset($count)) {
		return $count;
	}

	// get information from db
	$result = $db->getFirstRow("
		SELECT COUNT(`b`.`userId`) AS `count`
		FROM
		(
			SELECT `a`.`userId` AS `userId`
			FROM `userActivities` `a`
			WHERE `a`.`eventId` = '".$db->escape($eventId)."'
			AND `a`.`responded` > DATE_SUB(NOW(), INTERVAL ".MINUTES_ACTIVE." MINUTE)
			GROUP BY `a`.`userId`
		) `b`;
	");

	if ($result === false) {
		return 0;
	}

	$count = (int) $result['count'];

	return (int) $result['count'];
}


/**
 * Returns the max count of listeners for the event
 *
 * @param int $eventId Event's ID
 * @return int count of listeners
 */
function getMaxUserCount($eventId) {
	global $db;
	static $count;

	// check cache
	if (isset($count)) {
		return $count;
	}

	// get information from db
	$result = $db->getFirstRow("
		SELECT COUNT(`userId`) AS `count`
		FROM `participations`
		WHERE `eventId` = '".$db->escape($eventId)."'");

	if ($result === false) {
		return 0;
	}

	$count = (int) $result['count'];

	return (int) $result['count'];
}

/**
 * Calculate the priority for a message
 *
 * @param int $eventId Event's ID
 * @param int $supporters Count of supporters
 * @return int A value between 1 and 10
 */
function getPriority($eventId, $supporters) {

	// get current user count
	$count = getUserCount($eventId);

	// set to minimal count
	if ($count < MIN_USER) {
		$count = MIN_USER;
	}

	$interim = floor($supporters/$count*100/5);

	if ($interim < 1) {
		$interim = 1;
	}

	if ($interim > 10) {
		$interim = 10;
	}
	return $interim;
}


/**
 * Get cache url
 *
 * @param int $eventId Event's ID
 * @return string cache url
 */
function getEventCacheURL($eventId) {
	return 'ajax/tmp.php?eventId='.$eventId;
}

/**
 * Set event cache
 *
 * @param string $accessKey Access key
 * @param int $eventId Event's ID
 * @param string $content Content for the cache
 * @return boolean
 */
function setEventCache($accessKey, $eventId, $content) {
	if (!is_dir(PATH_CACHE_DIR.$eventId)) {
		@mkdir(PATH_CACHE_DIR.$eventId, 0755);
	}
	if (is_file(PATH_CACHE_DIR.$eventId.'/json')) {
		@unlink(PATH_CACHE_DIR.$eventId.'/json');
	}
	return @file_put_contents(PATH_CACHE_DIR.$eventId.'/json', $content);
}

/**
 * Calculation of meter
 *
 * @param int $supporter Count of the supporters
 * @param int $count Count of the listeners
 * @return int Value between -10 and 10
 */
function getMeterCalculation($supporter, $count) {


	if ($count <= 0) {
		return 0;
	}

	if ($count < MIN_USER) {
		$count = MIN_USER;
	}

	$interim = round($supporter*20/$count);

	if ($interim < -10) {
		$interim = -10;
	}

	if ($interim > 10) {
		$interim = 10;
	}

	return $interim;
}


function calculateMeterMessage($eventId, $valueName) {
	global $db, $tb_config;


	$needMinutes = 5;
	$needPercent = array(
	 0 =>  9,
	 1 => 12,
	 2 => 14,
	 3 => 16,
	 4 => 18,
	 5 => 20,
	 6 => 23,
	 7 => 26,
	 8 => 29,
	 9 => 34,
	);


	$typeId = $tb_config['meterValues'][$valueName]['id'];
	$meterId = 0;
	foreach ($tb_config['meters'] as $meter) {
		if ($meter['name'] == $tb_config['meterValues'][$valueName]['meterName']) {
			$meterId = $meter['id'];
			break;
		}
	}

	$currentUserCount = getUserCount($eventId);
	if ($currentUserCount == 0) {
		return false;
	}



	// first check for last confirm
	$confirmedDate = $db->getFirstRow("
		SELECT
			`confirmed`,
			DATE_ADD(`confirmed`, INTERVAL ".$needMinutes." MINUTE) - NOW() AS `again`
		FROM `meter-confirmations`
		WHERE `eventId` = '".$eventId."'
		AND `valueId` = '".$typeId."'
		ORDER BY `confirmed` DESC
		LIMIT 1;
	");

	if ($confirmedDate !== false) {
		if ($confirmedDate['again'] > 0) {
			return false;
		}

		$confirmedDate = $confirmedDate['confirmed'];

		$confirmedCount = $db->getFirstRow("
			SELECT COUNT(`confirmed`) AS `count`
			FROM `meter-confirmations`
			WHERE `eventId` = '".$eventId."'
			AND `valueId` = '".$typeId."';
		");

		$confirmedCount = (int) $confirmedCount['count'];

	} else {

		$confirmedCount = 0;

	}

	$direction = $tb_config['meterValues'][$valueName]['direction'];

	$meterStatus = $db->getFirstRow("
		SELECT SUM(`u`.`status`) AS `sum`
		FROM (

			SELECT `m`.`status` AS `status`
			FROM (

				SELECT `e`.`status` , `e`.`userId`
				FROM `meter-messages` `e`
				WHERE `e`.`eventId` = '".$db->escape($eventId)."'
				AND `e`.`typeId` = '".$meterId."'
				".(($confirmedCount !== 0)? "AND `set` > '".$confirmedDate."'":"")."
				AND `e`.`userId` IN (

					SELECT `a`.`userId` AS `userId`
					FROM `userActivities` `a`
					WHERE `a`.`eventId` = '".$db->escape($eventId)."'
					AND `a`.`responded` > DATE_SUB( NOW( ) , INTERVAL ".MINUTES_ACTIVE." MINUTE )
					GROUP BY `a`.`userId`

				)
				ORDER BY `e`.`set` DESC

			) AS `m`
			GROUP BY `userId`

		) AS `u`
		WHERE `u`.`status` ".$direction." 0;
	");


	if ($meterStatus['sum'] == NULL) {
		return false;
	}

	$meterUserCount = abs($meterStatus['sum']);

	$percent = $meterUserCount / $currentUserCount*100;

	if (isset($needPercent[$confirmedCount])) {
		if ($percent >= $needPercent[$confirmedCount]) {
			return $meterStatus['sum'];
		} else {
			return false;
		}
	} else {
		if ($percent >= end($needPercent)) {
			return $meterStatus['sum'];
		} else {
			return false;
		}
	}
}

/**
 * Return the user name
 *
 * If no user ID is given we take the cookies one.
 *
 * @param int $userId User's ID
 * @param int $time timestamp to use
 * @return string Username or null
 */
function getUsername($userId = null, $time = null) {
	global $db;

	if ($userId === null) {
		$userId = getUserId();
	}

	if ($userId === false) {
		return null;
	}

	if ($time === null || !is_numeric($time)) {
		$time = time();
	}

	$username = $db->getFirstRow("
		SELECT `username`
		FROM `usernames`
		WHERE `userId` = '".$db->escape($userId)."'
		AND UNIX_TIMESTAMP(`set`) <= ".$time."
		ORDER BY `set` DESC
		LIMIT 1;");

	if ($username === false) {
		return null;
	}

	return $username['username'];
}

/**
 * Check event's ID. Stops the processing if it's a bad event id.
 *
 * @param int $eventId Event's ID
 * @return int Event's ID
 */
function checkEventId($eventId) {
	global $db;

	// check event id
	$event = $db->getFirstRow("
		SELECT `id`
		FROM `events`
		WHERE `id` = '".$db->escape($eventId)."'
		LIMIT 1;");

	if (!$event) {
		sendError(TYPE_SYSTEM, 'Unknown event id');
	}
	return (int) $event['id'];
}

/**
 * Check for not be the lecturer. Stops the processing if not.
 *
 * @param int $eventId Event's ID
 * @return void
 */
function checkNoLecturer($eventId) {
	if (isLecturerUser($eventId)) {
		sendError(TYPE_SYSTEM, 'User is lecturer');
	}
}

/**
 * Check for be the lecturer. Stops the processing if not.
 *
 * @param int $eventId Event's ID
 * @return void
 */
function checkLecturer($eventId) {
	if (!isLecturerUser($eventId)) {
		sendError(TYPE_SYSTEM, _('User is no lecturer'));
	}
}

/**
 * Check for not be banned. Stops the processing if not.
 *
 * @param int $eventId Event's ID
 * @return void
 */
function checkBanned($eventId) {
	global $db;

	$result = $db->getFirstRow("
		SELECT `m`.`id`
		FROM `messages` `m`
		JOIN `buckets` `b` ON `b`.`messageId` = `m`.`id`
		WHERE `m`.`userId` = '".getUserId($eventId)."'
		AND `b`.`type` = '1'
		LIMIT 1;
	");

	if ($result !== false) {
		sendError(TYPE_SYSTEM, 'User baned',
			_('You\'re Baned'),
			_('The lecturer baned you. Your are not allowed to provide feedback for this event anymore.')
		);
	}
}

/**
 * Save a user activity for the report
 *
 * @param int $userId User's ID
 * @param int $eventId Event's ID
 * @return boolean
 */
function userActivity($userId, $eventId) {
	global $db;

	$result = $db->insertRow('userActivities', array(
		'userId' => $userId,
		'eventId' => $eventId,
	));

	return ($result !== false);
}
