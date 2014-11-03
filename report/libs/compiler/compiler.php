<?php

class Compiler {

	protected $outputFile;
	protected $scriptFiles = array();


	public function __construct($outputFile) {
		$this->outputFile = $outputFile;
	}


	public function addScript($script, $correctedPath = '') {
		$this->scriptFiles[] = array(
			'Path' => $correctedPath,
			'Script' => $script,
		);
	}


	public function addScripts($scripts, $correctedPath = '') {
		foreach ($scripts as $script) {
			$this->addScript($script, $correctedPath);
		}
	}


	public function compile() {

		$jsString = $this->putCodeTogether();
		return $this->save($jsString);

	}

	protected function save($string) {
		return (file_put_contents($this->outputFile, $string) === false)? 1 : 0;
	}

	protected function putCodeTogether() {
		$errors = array();

		// copy all scripts into one file
		$jsString = '';

		foreach($this->scriptFiles as $script) {

			$filename = $script['Script'];
			$path     = $script['Path'];

			if (is_file($path.$filename)) {

				$jsString .= file_get_contents($path.$filename);

			} elseif (strpos($filename, 'http://') === 0 || strpos($file, 'https://') === 0) {

				$externJs = file_get_contents($filename);

				if ($externJs === false) {
					$errors[] = 'Couldn\'t download '.$filename;
					continue;
				}

				$jsString .= $externJs;

			} else {

				$errors[] = 'Couldn\'t find '.$filename;

			}
		}
		return $jsString;
	}
}


