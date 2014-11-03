<?php
/**
 * Initiation for ajax request
 *
 *   - load configuration
 *   - load database class
 *   - load functions
 *   - connect to database
 *
 */

// include needed files
require_once '../config.php';
require_once 'mysql.php';
require_once 'functions.php';

// create default output
$jsonOutput					= array();
$jsonOutput['warnings']		= array();
$jsonOutput['debug']		= array();


//header(JSON_HEADER);


// try to connect to database
try {
	global $db;

	$db = new Database(
		$tb_config['database']['server'],
		$tb_config['database']['database'],
		$tb_config['database']['username'],
		$tb_config['database']['password']
	);

} catch (Exception $e) {
	sendError(TYPE_SYSTEM, $e->getMessage());
}
