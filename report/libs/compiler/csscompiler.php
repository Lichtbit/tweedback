<?php

require_once(dirname(__FILE__).'/compiler.php');
require_once(dirname(__FILE__).'/cssmin.php');

class CSSCompiler extends Compiler {

	protected function putCodeTogether() {
		$string = parent::putCodeTogether();
		$string = CssMin::minify($string);

		return $string;
	}

}


