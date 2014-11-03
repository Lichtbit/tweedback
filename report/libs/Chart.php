<?php


/* pChart library inclusions */
require_once(dirname(__FILE__).'/pchart/class/pData.class.php');
require_once(dirname(__FILE__).'/pchart/class/pDraw.class.php');
require_once(dirname(__FILE__).'/pchart/class/pImage.class.php');
require_once(dirname(__FILE__).'/pchart/class/pBubble.class.php');

abstract class Chart {
	protected $db;
	protected $eventId;
	protected $pictures;


	private $event = null;

	public function __construct($db, $eventId) {
		$this->db = $db;
		$this->eventId = $eventId;
	}

	protected function createPicture($data, $title = '', $width = 1400, $height = 460) {

		// reset data-width
		$d = $data->getData();
		foreach ($d['Series'] as $name => $value) {
			$data->setSerieWeight($name, 1);
		}

		/* Create the pChart object */
		$this->picture = new pImage($width, $height, $data);

		/* Overlay with a gradient */
		$this->picture->drawGradientArea(0, $height - 60, $width, $height, DIRECTION_VERTICAL, array(
			'StartR' => 255,
			'StartG' => 255,
			'StartB' => 255,
			'EndR'   => 224,
			'EndG'   => 79,
			'EndB'   => 62,
			'Alpha'  => 20
		));

		/* Background for title */
		$this->picture->drawGradientArea(0, 0, round($width/3), 30, DIRECTION_VERTICAL, array(
			'StartR' => 48,
			'StartG' => 48,
			'StartB' => 48,
			'EndR'   => 68,
			'EndG'   => 68,
			'EndB'   => 68,
			'Alpha'  => 90,
		));


		/* Write the picture title */
		if ($title !== '') {
			$this->picture->setFontProperties(array(
				'FontName' => 'libs/pchart/fonts/verdana.ttf',
				'FontSize' => 16,
			));
			$this->picture->drawText(10, 4, $title, array(
				'R' => 255,
				'G' => 255,
				'B' => 255,
				'Align' => TEXT_ALIGN_TOPLEFT
			));
		}

		/* Turn on AAliasing */
		$this->picture->Antialias = true;

		/* Draw the border */
		$this->picture->drawRectangle(0, 0, $width - 2, $height - 2,
			array('R'=>0, 'G'=>0, 'B'=>0)
		);

		/* Set font */
		$this->picture->setFontProperties(array(
			'FontName' => 'libs/pchart/fonts/pf_arma_five.ttf',
			'FontSize' => 14,
		));

		/* Define the chart area */
		$this->picture->setGraphArea(120, 60, 1300, 380);
	}

	public function save($path) {
		/* Generate picture */
		$this->generate();

		/* Render the picture (choose the best way) */
		$this->picture->render($path);
	}

	protected abstract function generate();

	public function getEvent() {
		if ($this->event === null) {

			$this->event = $this->db->getFirstRow("
				SELECT *
				FROM `events`
				WHERE `id` = '".$this->db->escape($this->eventId)."'
				LIMIT 1;");
		}

		return $this->event;

	}
}


function clockLabel($minutes, $startet) {
	$t = strtotime($startet);
	$labelTime = mktime(
		date('H', $t),
		date('i', $t) + $minutes,
		date('s', $t),
		date('m', $t),
		date('d', $t),
		date('Y', $t)
	);
	return date('H:i', $labelTime);
}


function onlyFullNumbers($value) {
	if (round($value) == $value) {
		return $value;
	} else {
		return '';
	}
}
