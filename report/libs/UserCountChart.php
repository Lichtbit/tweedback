<?php

/* pChart library inclusions */
include_once(dirname(__FILE__).'/Chart.php');


class UserCountChart extends Chart {

	public function generate() {

		/* calulate users per duration */
		$event = $this->getEvent();
		$duration = $event['duration'];

		$durationMinutes = $duration*60;

		$minutesPerStep = round($duration / 2);

		$userCounts = array(0);
		$minutes = array(0);
		$users = array();

		for ($i = 1; $i <= 120; $i++) {

			$currentMinute = $minutesPerStep * $i;

			$result = $this->db->getFirstRow("
				SELECT COUNT(`b`.`userId`) AS `count`
				FROM
				(
					SELECT `a`.`userId` AS `userId`
					FROM `userActivities` `a`
					WHERE `a`.`eventId` = '".$this->db->escape($event['id'])."'
					AND `a`.`responded` > DATE_ADD('".$event['created']."', INTERVAL ".$currentMinute." MINUTE)
					AND `a`.`responded` <= DATE_ADD('".$event['created']."', INTERVAL ".($currentMinute + $minutesPerStep)." MINUTE)
					GROUP BY `a`.`userId`
				) `b`;
			");

			if ($result !== false) {
				$userCounts[$i] = $result['count'];
			} else {
				$userCounts[$i] = 0;
			}

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
		$MyData->addPoints($userCounts,'Users');

		$MyData->addPoints($minutes,'Labels');
		$MyData->setSerieDescription('Labels', 'Months');
		$MyData->setAbscissa('Labels');

		$MyData->setAxisName(0,'User count');
		$MyData->setAxisDisplay(0, AXIS_FORMAT_CUSTOM, 'onlyFullNumbers');

		/* Create the pChart object */
		$this->createPicture($MyData, _('Number of Users'));


		/* Draw the scale */
		$this->picture->drawScale(array(
			'Mode'            => SCALE_MODE_START0,
			'XMargin'         => 10,
			'YMargin'         => 10,
			'Floating'        => true,
			'GridR'           => 200,
			'GridG'           => 200,
			'GridB'           => 200,
			'DrawSubTicks'    => true,
			'CycleBackground' => true,
			'DrawXLines'      => false,
		));

		/* Draw the line chart */
		$this->picture->drawLineChart();

		/* Write the chart legend */
		$this->picture->drawLegend(590, 17, array(
			'Style' => LEGEND_NOBORDER,
			'Mode'  => LEGEND_HORIZONTAL
		));
	}
}
