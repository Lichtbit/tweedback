<?php

class CleanCache {
	const CACHE_TIME = 86400;

	public static function clean($absolutePath) {

		if (!is_dir($absolutePath)) {
			return false;
		}

		return self::cleanNode($absolutePath.'/');
	}

	protected static function cleanNode($path) {
		$path = str_replace('//', '/', $path);

		$fileExists = false;

		$vz = opendir($path);
		while($file = readdir($vz)) {
			if ($file == '.' || $file == '..') {
				continue;
			}

			if (strpos($file, '.') === 0) {
				$fileExists = true;
				continue;
			}

			if (is_file($path.$file)) {
				$modificated = filemtime($path.$file);
				if ($modificated < time() - self::CACHE_TIME) {
					unlink($path.$file);
				} else {
					$fileExists = true;
				}

			} elseif (is_dir($path.$file)) {
				if (!self::cleanNode($path.$file.'/')) {
					$fileExists = true;
				} else {
					rmdir($path.$file.'/');

				}
			} else {
				$fileExists = true;
			}
		}

		return !$fileExists;
	}
}
