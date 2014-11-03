<?php

if (isset($_GET['eventId']) && is_numeric($_GET['eventId'])) {

	require_once('libs/CLImax.php');
	require_once('libs/Report.php');
	require_once('../ajax/init.php');

	try {
		// create report by event id
		$report = new Report($_GET['eventId'], dirname(__FILE__).'/cache/');

		// generate report and send direct to browser
		$report->generate(false, true);
	} catch (Exception $e) {
		echo $e->getMessage();
	}
}
