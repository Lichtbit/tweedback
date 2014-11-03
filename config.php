<?php

/*
 * Localization and timezone settings
 */
setlocale(LC_ALL, 'de_DE.UTF8');
date_default_timezone_set('Europe/Berlin');

/*
 * Institution, company, person using/hosting this application
 */
define('CONTEXT_TITLE', 'Universität Rostock');

/*
 * Name of the program with current version
 */
define('TB_NAME_WITH_VERSION', 'Tweedback 1.0');

/*
 * Activate for development
 */
define('DEBUG', true);


/*
 * There are still compability problems with JSON types within headers:
 *  application/json  The correct type. Should be used.
 *  text/javascript   If unavoidable, only use it as temporary workaround.
 */
define('JSON_HEADER', 'Content-Type: application/json; charset=utf-8');

/*
 * The number of event simultaneously listed on event selection page
 */
define('EVENT_REQUEST_PAGE_SIZE', 25);

/*
 * Limits the maximum length of usernames
 */
define('MAXIMUM_USERNAME_LENGTH', 15);


// Cookie expire in 1 day
define('COOKIE_TIME_EXPIRE', time() + 84600);

// Cookie starts with
define('COOKIE_KEY_START', 'tweedback_event_');
define('COOKIE_USER_START', 'user_');
define('COOKIE_KEY_USER', 'user');

// min users
define('MIN_USER', 20);

// path to cache dir
define('PATH_CACHE_DIR', 'tmp/');

define('TYPE_USER', 'user');
define('TYPE_SYSTEM', 'system');

// minutes the user is active
define('MINUTES_ACTIVE', 5);


/*
 * globalize config object
 */
global $tb_config;


/**
 * Informations to connect to database server
 */
$tb_config['database']['server']   = 'localhost';
$tb_config['database']['username'] = 'tweedback';
$tb_config['database']['password'] = 'tweedback';
$tb_config['database']['database'] = 'tweedback';


/**
 * Information for sending emails
 */
$tb_config['email']['from']          = 'www-data@mgvmedia.com';
$tb_config['email']['from-name']     = 'Webserver (Tweedback)';
$tb_config['email']['reply-to']      = 'georf@georf.de';
$tb_config['email']['reply-to-name'] = 'Webserver (Tweedback)';


/**
 * A list of Javascript files needed for Tweedback
 * @var array
 */
$tb_config['javascript'] = array(
	'http://code.jquery.com/jquery-1.6.2.min.js',
	'http://code.jquery.com/mobile/1.0b3/jquery.mobile-1.0b3.min.js',
	'js/jstorage.js',
	'js/tb-message-list.js',
	'js/tweedback.js',
	'js/tb-init.js',
	'js/tb-event-selection.js',
	'js/tb-create-event.js',
	'js/tb-feedback-page.js',
	'js/tb-user-settings.js',
	'js/tb-help.js',
);

/**
 * A list of CSS files needed for Tweedback
 * @var array
 */
$tb_config['css'] = array(
	'css/jquery.mobile-1.0b3.min.css',
	'css/style.css',
);

/**
 * possible event durations
 * @var array
 */
$tb_config['event_duration'] = array(2, 4, 6, 12, 24);

/**
 * Meters
 */
$tb_config['meters'] = array(
	array(
		'name'			=> 'speed',
		'id'			=> 1,
		'label'			=> _('Talking Speed'),
		'buttonLabels'	=> array(
			'-' => _('Too Slow'),
			'+' => _('Too Fast'),
			'0' => _('Fine'),
		),
		'bucket'		=> 'speed',
	),
	array(
		'name'			=> 'understanding',
		'id'			=> 2,
		'label'			=> _('asdf'),
		'buttonLabels'	=> array(
			'-' => _('Too Slow'),
			'+' => _('Too Fast'),
			'0' => _('Fine'),
		),
		'bucket'		=> 'understanding',
	)
);

$tb_config['meterValues'] = array(
	'tooFast' => array(
		'id' => 1,
		'meterName' => 'speed',
		'direction' => '>',
	),
	'tooSlow' => array(
		'id' => 2,
		'meterName' => 'speed',
		'direction' => '<',
	),
	'unclear' => array(
		'id' => 3,
		'meterName' => 'understanding',
		'direction' => '<',
	),
);

$tb_config['buckets'] = array(
	1 => 'ban',
	2 => 'later',
	3 => 'delete',
	4 => 'speed',
);

$tb_config['categories'] = array(
	array(
		'id'			=> 1,
		'name'			=> 'example',
		'label'			=> _('Example'),
		'description'	=> _('Please Give an Example'),
	),
	array(
		'id'			=> 2,
		'name'			=> 'explanation',
		'label'			=> _('Explanation'),
		'description'	=> _('Please Give an Explanation'),
	),
);
