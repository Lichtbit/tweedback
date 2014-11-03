<?php

/* pChart library inclusions */
include_once(dirname(__FILE__).'/Chart.php');


class UnderstandingChart extends Chart {

	public function generate() {

		/* calulate users per duration */
		$event = $this->getEvent();
		$duration = $event['duration'];

		$durationMinutes = $duration*60;

		$minutesPerStep = round($duration / 2);

		$positiv         = array(0);
		$minutes         = array(0);
		$users           = array();
		$questionsWeight = array(0);

		for ($i = 1; $i <= 120; $i++) {

			$pos = $positiv[$i-1];

			$currentMinute = $minutesPerStep * $i;

			$result = $this->db->getRows("
				SELECT `status`, `userId` , `set`
				FROM `meter-messages`
				WHERE `eventId`='".$this->db->escape($event['id'])."'
				AND `typeId`=2
				AND DATE_ADD('".$event['created']."', INTERVAL ".$currentMinute." MINUTE) < `set`
				AND DATE_ADD('".$event['created']."', INTERVAL ".($currentMinute + $minutesPerStep)." MINUTE) >= `set`
				ORDER BY `set`
				;
			");

			foreach ($result as $message) {
				if (isset($users[$message['userId']])) {
					if ($users[$message['userId']] === '-') {
						$pos--;
					}
				}

				if ($message['status'] == 0) {
					unset($users[$message['userId']]);
				} elseif ($message['status'] == -1) {
					$users[$message['userId']] = '-';
					$pos++;
				}
			}
			$positiv[$i] = $pos;

			/* get messages in this period */
			$messages = $this->db->getRows("
				SELECT
					`id`
				FROM `messages`
				WHERE `eventId` = '".$event['id']."'
				AND `supported` IS NULL
				AND DATE_ADD('".$event['created']."', INTERVAL ".$currentMinute." MINUTE) < `sent`
				AND DATE_ADD('".$event['created']."', INTERVAL ".($currentMinute + $minutesPerStep)." MINUTE) >= `sent`
				;");

			$count = 0;

			foreach ($messages as $message) {

				$count++;

				$messageInfo = $this->db->getFirstRow("
					SELECT
						COUNT(`supported`) AS `count`
					FROM `messages`
					WHERE `eventId` = '".$event['id']."'
					AND `supported` = '".$message['id']."'
					GROUP BY `supported`
					;");

				if ($messageInfo) {
					$count += $messageInfo['count'];
				}
			}

			if ($count !== 0) {
				$count = (1 - (pow(self::getRatio($event['id']), $count)));
			}

			$questionsWeight[$i] = $count;

			$minutes[$i] = $currentMinute;
		}

		$maxPos = max($positiv);
		if ($maxPos == 0) {
			$maxPos = 1;
		}

		for ($i = 0; $i < count($minutes); $i++) {
			if ($i % 10 == 0) {
				$minutes[$i] = clockLabel($minutes[$i], $event['created']);
			} else {
				$minutes[$i] = '';
			}

			$questionsWeight[$i] = $questionsWeight[$i] / 5 * $maxPos;
		}

		/* Create and populate the pData object */
		$MyData = new pData();

		$MyData->addPoints($positiv, 'Unclear');
		$MyData->addPoints($positiv, 'Questions');
		$MyData->addPoints($questionsWeight, 'QuestionsWeight');

		$MyData->addPoints($minutes, 'Labels');
		$MyData->setAbscissa('Labels');

		$MyData->setAxisName(0,'User count');
		$MyData->setAxisDisplay(0, AXIS_FORMAT_CUSTOM, 'onlyFullNumbers');

		/* Create the pChart object */
		$this->createPicture($MyData, _('Understanding'));

		/* Create the Bubble chart object and scale up */
		$myBubbleChart = new pBubble($this->picture, $MyData);

		/* Scale up for the bubble chart */
		$bubbleDataSeries   = array('Questions');
		$bubbleWeightSeries = array('QuestionsWeight');
		$myBubbleChart->bubbleScale($bubbleDataSeries, $bubbleWeightSeries);

		$MyData->setSerieDrawable('Questions', false);
		$MyData->setSerieDrawable('QuestionsWeight', false);

		if (max($positiv) == 0) {
			$mode = array(
				'Mode' => SCALE_MODE_MANUAL,
				'ManualScale' => array(
					0 => array(
						'Min' => 0,
						'Max' => 1
					)
				)
			);
		} else {
			$mode = array(
				'Mode' => SCALE_MODE_START0,
			);
		}


		/* Draw the scale */
		$this->picture->drawScale(array_merge(
			$mode, array(
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
		)));

		$MyData->setSerieDrawable('Questions', true);
		$MyData->setSerieDrawable('QuestionsWeight', true);

		$myBubbleChart->drawBubbleChart($bubbleDataSeries, $bubbleWeightSeries);

		$MyData->setSerieDrawable('Questions', false);
		$MyData->setSerieDrawable('QuestionsWeight', false);

		/* Draw the line chart */
		$this->picture->drawLineChart();


		$MyData->setSerieDrawable('Questions', true);

		/* Write the chart legend */
		$this->picture->drawLegend(590,17,array('Style'=>LEGEND_NOBORDER,'Mode'=>LEGEND_HORIZONTAL));
	}

	protected static function getRatio($eventId) {
		static $ratio;

		if (isset($ratio)) {
			return $ratio;
		}

		$ratio = 0.5 + 0.5*(1-(pow(0.98, getMaxUserCount($eventId))));
		return $ratio;
	}
}
