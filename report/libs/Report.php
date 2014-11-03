<?php

require_once(dirname(__FILE__).'/tcpdf/config/lang/eng.php');
require_once(dirname(__FILE__).'/tcpdf/tcpdf.php');

// Extend the TCPDF class to create custom Header and Footer
class Report extends TCPDF {
	protected $eventId;
	protected $event;
	protected $cacheDir;

	public function __construct($eventId, $cacheDir) {
		$this->eventId  = $eventId;
		$this->cacheDir = $cacheDir;

		parent::__construct(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
	}


	// Page header
	public function Header() {
		// Position at 15 mm from top
		$this->SetY(5);
		// Set font
		$this->SetFont('freemono', '', 8);
		// Page number
		$this->Cell(0, 10,
		sprintf(_('%s - Final report - Tweedback - Page %s/%s'), $this->event['name'], $this->getAliasNumPage(), $this->getAliasNbPages()),
		0, false, 'C', 0, '', 0, false, 'T', 'M');
	}

	// Page footer
	public function Footer() {
	}


	protected function putInformation() {
		global $l;

		// set JPEG quality
		$this->setJPEGQuality(100);

		// set document information
		$this->SetCreator(PDF_CREATOR);
		$this->SetAuthor(TB_NAME_WITH_VERSION);
		$this->SetTitle(sprintf(_('Report for %s'), $this->event['name']));
		$this->SetSubject(sprintf(_('Final report for using %s in %s'), TB_NAME_WITH_VERSION, $this->event['name']));
		$this->SetKeywords(sprintf(_('Report, Tweedback, %s'), $this->event['name']));

		// set default monospaced font
		$this->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

		//set margins
		$this->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
		$this->SetHeaderMargin(PDF_MARGIN_HEADER);
		$this->SetFooterMargin(PDF_MARGIN_FOOTER);

		//set auto page breaks
		$this->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

		//set image scale factor
		$this->setImageScale(PDF_IMAGE_SCALE_RATIO);

		//set some language-dependent strings
		$this->setLanguageArray($l);
	}

	public function generate($filename = false, $toBrowser = false) {
		global $db, $tb_config;

		$this->event = $db->getFirstRow("
			SELECT *
			FROM `events`
			WHERE `id` = '".$db->escape($this->eventId)."'
			LIMIT 1;");

		if ($this->event === false) {
			throw new Exception('Event with id '.$this->eventId.' does not exist.');
		}

		// set informations
		$this->putInformation();

		// set font
		$this->SetFont('dejavusans', '', 10);

		// add a page
		$this->AddPage();

		// put event information
		$this->addEventInformation();


		// add speed chart
		$this->addSpeedChart();

		// reset pointer
		$this->setY($this->getY() + 70);

		// add understanding chart
		$this->addUnderstandingChart();

		// reset pointer
		$this->setY($this->getY() + 70);

		// add understanding chart
		$this->addUserCountChart();

		// reset pointer to the last page
		$this->lastPage();

		// new page
		$this->addPage();

		// put user participation information
		$this->addUserParticipationInformation();

		// reset pointer to the last page
		$this->lastPage();

		// put information about lecturer's actions
		$this->addLecturersInformation();

		// reset pointer to the last page
		$this->lastPage();

		// new page
		$this->addPage();

		// add a table with messages
		$this->addMessagesInformation();

		// reset pointer to the last page
		$this->lastPage();


		// Close and output PDF document
		if ($filename === false) {
			if ($toBrowser === false) {
				return $this->Output('report.pdf', 'S');
			} else {
				$this->Output('report.pdf', 'I');
			}
		} else {
			$this->Output($filename, 'F');
		}
	}



	public function addEventInformation() {
		$html = '
		<style>
			.grey {
				border:1px solid #BFBFBF;
			}
			.grey2 {
				border:1px solid #E5E5E5;
			}
		</style>

		<h1>'.$this->event['name'].'</h1>
		<table class="grey">
			<tr>
				<td class="grey2">'._('Event Code:').'</td>
				<td class="grey2">'.$this->event['accessKey'].'</td>
			</tr>
			<tr>
				<td class="grey2">'._('Date of Creation:').'</td>
				<td class="grey2">'.strftime('%x', strtotime($this->event['created'])).' '.strftime('%X', strtotime($this->event['created'])).'</td>
			</tr>
			<tr>
				<td class="grey2">'._('Duration:').'</td>
				<td class="grey2">'.sprintf(_('%s h'), $this->event['duration']).'</td>
			</tr>
		</table>
		';

		// output the HTML content
		$this->writeHTML($html, true, false, true, false, '');
	}


	public function addUnderstandingChart() {
		global $db;

		include_once(dirname(__FILE__).'/UnderstandingChart.php');

		$understandingChart = new UnderstandingChart($db, $this->eventId);
		$understandingChart->save($this->cacheDir.'understanding'.$this->eventId.'.png');

		$this->Image($this->cacheDir.'understanding'.$this->eventId.'.png', '', '', '180mm');
	}

	public function addUserCountChart() {
		global $db;

		// generate user count chart
		require_once(dirname(__FILE__).'/UserCountChart.php');
		$userCountChart = new UserCountChart($db, $this->eventId);
		$userCountChart->save($this->cacheDir.'userparticipations'.$this->eventId.'.png');

		$this->Image($this->cacheDir.'userparticipations'.$this->eventId.'.png', '', '', '180mm');
	}

	public function addUserParticipationInformation() {
		global $db;


		$html = '
		<style>
			.grey {
				border:1px solid #BFBFBF;
			}
			.grey2 {
				border:1px solid #E5E5E5;
			}
		</style>

		<h2>'._('Users').'</h2>
		<table class="grey">
			<tr>
				<th class="grey">'._('Time').'</th>
				<th class="grey">'._('User').'</th>
				<th class="grey">'._('Action').'</th>
			</tr>';


		$users = $db->getRows("
			SELECT `userId`, `joined`
			FROM `participations`
			WHERE `eventId` = '".$this->event['id']."'
			GROUP BY `userId`
			ORDER BY `joined`;");

		$actions = array();
		$userJoined = array();

		foreach ($users as $user) {
			// get username
			$name = $db->getFirstRow("
				SELECT `username`
				FROM `usernames`
				WHERE `userId` = '".$user['userId']."'
				AND `set` < '".$user['joined']."'
				ORDER BY `set` DESC
				LIMIT 1;");

			if ($name !== false) {
				$user['name'] = $name['username'];
			} else {
				$user['name'] = null;
			}

			$time = strtotime($user['joined']);
			while (isset($actions[$time])) $time++;
			$actions[$time] = $user;

			$userJoined[$user['userId']] = $user['joined'];
		}

		$where = '';
		foreach ($userJoined as $id => $joined) {
			$where .= "(`userId` = '".$id."' AND `set` > '".$joined."') OR ";
		}

		$useractions = $db->getRows("
			SELECT `userId`, `username` AS `name`, `set`
			FROM `usernames`
			WHERE ".$where."
			1=0
			ORDER BY `set`;");

		foreach ($useractions as $act) {
			$time = strtotime($act['set']);
			while (isset($actions[$time])) $time++;
			$actions[$time] = $act;
		}

		ksort($actions);

		$userJoined = array();
		foreach ($actions as $act) {
			$name = self::getNameToShow($act['name'], $act['userId']);

			if (isset($act['joined'])) {

				$html .=
					'<tr>'.
						'<td style="width:20%" class="grey">'.strftime('%X', strtotime($act['joined'])).'</td>'.
						'<td style="width:30%" class="grey">'.$name.'</td>'.
						'<td style="width:50%" class="grey">'._('Joined').'</td>'.
					'</tr>';
			} else {
				if (isset($userJoined[$act['userId']])) {
					$nameBefore = self::getNameToShow($userJoined[$act['userId']], $act['userId']);
				} else {
					$nameBefore = self::anonym($act['userId']);
				}
				$html .=
					'<tr>'.
						'<td style="width:20%" class="grey">'.strftime('%X', strtotime($act['set'])).'</td>'.
						'<td style="width:30%" class="grey">'.$name.'</td>'.
						'<td style="width:50%" class="grey">'.sprintf(_('Changed name from %s to %s'), $nameBefore, $name).'</td>'.
					'</tr>';
			}
			$userJoined[$act['userId']] = $act['name'];
		}


		$html .= '</table>';

		$this->writeHTML($html, true, false, true, false, '');
	}

	public static function getNameToShow($username, $userId) {
		return (is_null($username))? self::anonym($userId) : $username;
	}

	public static function anonym($userId) {
		return sprintf('Anonymous-%s', $userId);
	}


	public function addSpeedChart() {
		global $db;

		require_once(dirname(__FILE__).'/SpeedChart.php');

		$speedChart = new SpeedChart($db, $this->eventId);
		$speedChart->save($this->cacheDir.'userspeed'.$this->eventId.'.png');

		$this->Image($this->cacheDir.'userspeed'.$this->eventId.'.png', '', '', '180mm');
	}

	public function addLecturersInformation() {
		global $db, $tb_config;

		$html = '
		<style>
			.grey {
				border:1px solid #BFBFBF;
			}
			.grey2 {
				border:1px solid #E5E5E5;
			}
		</style>

		<h2>'._('Lecturer\'s Actions').'</h2>
		<table class="grey">
			<tr>
				<th class="grey">'._('Time').'</th>
				<th class="grey">'._('Action').'</th>
				<th class="grey">'._('Message').'</th>
			</tr>';


		$bucketMoves = $db->getRows("
			(
				SELECT `b`.`type` AS `type` , `b`.`moved` AS `time` , `c`.`text` AS `text` , 'bucket' AS `table`
				FROM `buckets` `b`
				JOIN `messages` `m` ON `m`.`id` = `b`.`messageId`
				JOIN `contents` `c` ON `c`.`id` = `m`.`contentId`
				WHERE `m`.`eventId` = '".$this->event['id']."'
			) UNION (

				SELECT `valueId` AS `type` , `confirmed` AS `time` , '' AS `text` , 'meter' AS `table`
				FROM `meter-confirmations`
				WHERE `eventId` = '".$this->event['id']."'
			)
			ORDER BY `time`
			;");

		foreach ($bucketMoves as $move) {
			if ($move['table'] == 'bucket') {
				$action = $tb_config['buckets'][(int)$move['type']];
			} else {
				$action = 'confirm';

				// find meter
				foreach ($tb_config['meters'] as $meter) {
					if ($meter['id'] == $move['type']) {
						$move['text'] = $meter['label'];
						break;
					}
				}
			}

			$html .=
				'<tr>'.
					'<td style="width:20%" class="grey">'.strftime('%X', strtotime($move['time'])).'</td>'.
					'<td style="width:30%" class="grey">'.$action.'</td>'.
					'<td style="width:50%" class="grey">'.$move['text'].'</td>'.
				'</tr>';
		}

		$html .= '</table>';

		$this->writeHTML($html, true, false, true, false, '');
	}


	protected function addMessagesInformation() {
		global $db;


		$html = '
		<style>
			.grey {
				border:1px solid #BFBFBF;
			}
			.grey2 {
				border:1px solid #E5E5E5;
			}
		</style>

		<h2>'._('Messages').'</h2>
		<table class="grey">
			<tr>
				<th style="width:20%" class="grey">'._('Time').'</th>
				<th style="width:40%" class="grey">'._('Message').'</th>
				<th style="width:20%" class="grey">'._('Supporters').'</th>
				<th style="width:20%" class="grey">'._('User').'</th>
			</tr>';


		$messages = $db->getRows("
			SELECT
				`m`.`id` AS `id`,
				`m`.`sent` AS `sent`,
				`m`.`userId` AS `userId`,
				`c`.`text` AS `text`,
				`m`.`contentId` AS `contentId`
			FROM `messages` `m`
			JOIN `contents` `c` ON `c`.`id` = `m`.`contentId`
			WHERE `eventId` = '".$this->eventId."'
			AND `supported` IS NULL
			GROUP BY `m`.`contentId`
			ORDER BY `sent`
			;");

		foreach ($messages as $message) {

			// count supports
			$supporters = $db->getFirstRow("
				SELECT
					COUNT(`id`) AS `count`
				FROM `messages`
				WHERE `eventId` = '".$this->eventId."'
				AND `contentId` = '".$message['contentId']."'
				GROUP BY `contentId`
				;");

			if ($supporters) {
				$supporterCount = $supporters['count'] - 1;
			} else {
				$supporterCount = 0;
			}


			$html .=
				'<tr>'.
					'<td style="width:20%" class="grey">'.strftime('%X', strtotime($message['sent'])).'</td>'.
					'<td style="width:50%" class="grey">'.$message['text'].'</td>'.
					'<td style="width:10%" class="grey">'.$supporterCount.'</td>'.
					'<td style="width:20%" class="grey">'.self::getNameToShow(getUsername($message['userId'], strtotime($message['sent'])), $message['userId']).'</td>'.
				'</tr>';
		}

		$html .= '</table>';

		$this->writeHTML($html, true, false, true, false, '');


	}
}
