#!/usr/bin/env php
<?php
/* vim: set syntax=php expandtab tabstop=4 shiftwidth=4: */
/**
 * Created by CLImax http://github.com/apinstein/climax
 * Mon, 29 Aug 2011 21:12:38 +0200
 */

define('CLI', true);
define('ABSOLUTE_PATH', dirname(__FILE__).'/');

define('PWD', getcwd());
chdir(dirname(__FILE__));

require_once(ABSOLUTE_PATH.'libs/CLImax.php');
require_once(ABSOLUTE_PATH.'libs/Report.php');

class CLISendReports extends CLIMax_BaseCommand
{
	public function run($arguments, CLImaxController $cliController)
	{
		if (!@include_once(ABSOLUTE_PATH.'../ajax/init.php')) {
			throw new Exception('Failed on initation');
		}


		// search for events to report
		$result = $db->getRows("
			SELECT `id`, `emailAddress`, `name`
			FROM `events`
			WHERE
				UNIX_TIMESTAMP(`created`) < UNIX_TIMESTAMP(NOW()) - `duration` * 3600
			AND `accessKey` IS NOT NULL
			;");

		if ($result === false) {
			throw new Exception();
		}

		foreach($result as $event) {

			// we don't need a report
			if (!empty($event['emailAddress'])) {

				//$file = generateReportFile($event['id']);
				require_once 'libs/class.phpmailer.php';

				$mail = new PHPMailer(true);

				$mail->CharSet = 'UTF-8';

				$mail->SetFrom($tb_config['email']['from'], $tb_config['email']['from-name']);
				$mail->AddReplyTo($tb_config['email']['reply-to'], $tb_config['email']['reply-to-name']);
				$mail->AddAddress($event['emailAddress']);
				$mail->Subject = sprintf(_('Tweedback - Report - %s'), $event['name']);
				$mail->IsHTML(false);


				$mail->Body = sprintf(_(
					"Dear Sir or Madam,\n".
					"thank you for using Tweedback. Attached you can find the final report\n".
					"for the event %s.\n".
					"\n".
					"Yours faithfully,\n".
					"The Tweedback Team\n"), $event['name']);

				$report = new Report($event['id'], ABSOLUTE_PATH.'cache/');

				$mail->AddStringAttachment($report->generate(), 'report.pdf');
				$mail->Send();
			}

			$db->updateRow('events', $event['id'], array(
				'accessKey' => null,
			));

		}

		return 0;
	}
}

class CLIGenerateReport extends CLIMax_BaseCommand
{
	public function run($arguments, CLImaxController $cliController)
	{
		if (!@include_once (ABSOLUTE_PATH.'../ajax/init.php')) {
			throw new Exception('Failed on initation');
		}

		if (count($arguments) !== 2) {
			throw new CLImaxCommand_ArugumentException(
				'command requires exactly 2 arguments: id of the event and filename.');
		}

		if (!is_numeric($arguments[0])) {
			throw new CLImaxCommand_ArugumentException(
				'command requires exactly 2 arguments: id of the event and filename.');
		}

		$filename = $arguments[1];
		if (strpos($filename, '/') !== 0) {
			$filename = PWD.'/'.$filename;
		}

		$report = new Report($arguments[0], ABSOLUTE_PATH.'cache/');
		$report->generate($filename);

		return 0;
	}
}



class CLICleanCache extends CLIMax_BaseCommand
{
	public function run($arguments, CLImaxController $cliController)
	{
		require_once(ABSOLUTE_PATH.'libs/CleanCache.php');

		CleanCache::clean(ABSOLUTE_PATH.'cache/');
		CleanCache::clean(ABSOLUTE_PATH.'../ajax/tmp/');

		return 0;
	}
}

class CLICompileJS extends CLIMax_BaseCommand
{
	public function run($arguments, CLImaxController $cliController)
	{
		require_once(ABSOLUTE_PATH.'libs/compiler/jscompiler.php');
		require_once(ABSOLUTE_PATH.'libs/compiler/csscompiler.php');

		if (!@include_once (ABSOLUTE_PATH.'../ajax/init.php')) {
			throw new Exception('Failed on initation');
		}

		$js = new JSCompiler(ABSOLUTE_PATH.'../js/compiled.js');
		$js->addScripts($tb_config['javascript'], ABSOLUTE_PATH.'../');

		$jsreturn = $js->compile();

		$css = new CSSCompiler(ABSOLUTE_PATH.'../css/compiled.css');
		$css->addScripts($tb_config['css'], ABSOLUTE_PATH.'../');

		$cssreturn = $css->compile();

		return $jsreturn + $cssreturn;

	}
}


// WIRE UP APPLICTION
CLImaxController::create()
	->addCommand(new CLISendReports,    array('report'))
	->addCommand(new CLIGenerateReport, array('testreport'))
	->addCommand(new CLICleanCache,     array('clean'))
	->addCommand(new CLICompileJS,      array('compile'))
	->run($argv, $argc);
