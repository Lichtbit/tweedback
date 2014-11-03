<?php

require_once('tcpdf/config/lang/eng.php');
require_once('tcpdf/tcpdf.php');

// Extend the TCPDF class to create custom Header and Footer
class TB_PDF extends TCPDF {
	protected $eventName;

	public function setEventName($eventName) {
		$this->eventName = $eventName;
	}

	// Page header
	public function Header() {
	}

	// Page footer
	public function Footer() {
		// Position at 15 mm from bottom
		$this->SetY(-15);
		// Set font
		$this->SetFont('freemono', '', 8);
		// Page number
		$this->Cell(0, 10,
		sprintf(_('%s - Final report - Tweedback - Page %s/%s'), $this->eventName, $this->getAliasNumPage(), $this->getAliasNbPages()),
		0, false, 'C', 0, '', 0, false, 'T', 'M');
	}
}
