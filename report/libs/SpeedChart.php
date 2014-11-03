<?php

/* pChart library inclusions */
include_once(dirname(__FILE__).'/Chart.php');


class SpeedChart extends Chart {

	public function generate() {

		/* calulate users per duration */
		$event = $this->getEvent();
		$duration = $event['duration'];

		$durationMinutes = $duration*60;

		$minutesPerStep = round($duration / 2);

		$positiv = array(0);
		$minutes = array(0);
		$negativ = array(0);
		$line    = array(0);
		$users   = array();

		for ($i = 1; $i <= 120; $i++) {

			$line[$i] = 0;

			$pos = $positiv[$i-1];
			$neg = -1 * $negativ[$i-1];

			$currentMinute = $minutesPerStep * $i;

			$result = $this->db->getRows("
				SELECT `status`, `userId` , `set`
				FROM `meter-messages`
				WHERE `eventId`='".$this->db->escape($event['id'])."'
				AND `typeId`=1
				AND DATE_ADD('".$event['created']."', INTERVAL ".$currentMinute." MINUTE) < `set`
				AND DATE_ADD('".$event['created']."', INTERVAL ".($currentMinute + $minutesPerStep)." MINUTE) >= `set`
				ORDER BY `set`
				;
			");

			foreach ($result as $message) {
				if (isset($users[$message['userId']])) {
					if ($users[$message['userId']] === '-') {
						$neg--;
					} elseif ($users[$message['userId']] === '+') {
						$pos--;
					}
				}

				if ($message['status'] == 0) {
					unset($users[$message['userId']]);
				} elseif ($message['status'] == 1) {
					$users[$message['userId']] = '+';
					$pos++;
				} elseif ($message['status'] == -1) {
					$users[$message['userId']] = '-';
					$neg++;
				}

			}

			$positiv[$i] = $pos;
			$negativ[$i] = -1*$neg;
			$minutes[$i] = $currentMinute;
		}

		for ($i = 0; $i < count($minutes); $i++) {
			if ($i % 10 == 0) {
				$minutes[$i] = clockLabel($minutes[$i], $event['created']);
			} else {
				$minutes[$i] = '';
			}
		}

		/* Create and populate the pData object */
		$MyData = new pData();
		$MyData->addPoints($positiv, 'Too fast');
		$MyData->addPoints($negativ, 'Too slow');

		$MyData->addPoints($minutes, 'Labels');
		$MyData->setSerieDescription('Labels', 'Months');
		$MyData->setAbscissa('Labels');

		$MyData->setAxisName(0, 'User count');
		$MyData->setAxisDisplay(0, AXIS_FORMAT_CUSTOM, 'onlyFullNumbers');

		$MyData->addPoints($line, 'Line');

		/* Create the pChart object */
		$this->createPicture($MyData, _('Perception of Speed'));

		$MyData->setSerieWeight('Line', 0.1);

		/* Draw the scale */
		$this->picture->drawScale(array(
			'XMargin'         => 10,
			'YMargin'         => 10,
			'Floating'        => true,
			'GridR'           => 200,
			'GridG'           => 200,
			'GridB'           => 200,
			'CycleBackground' => true,
			'DrawArrows'      => false,
			'DrawXLines'      => false,
			'ArrowSize'       => 6,
		));

		/* Draw the line chart */
		$this->picture->drawLineChart();

		$MyData->setSerieDrawable('Line', false);

		/* Write the chart legend */
		$this->picture->drawLegend(590, 17, array(
			'Style' => LEGEND_NOBORDER,
			'Mode'  => LEGEND_HORIZONTAL
		));
	}
}
