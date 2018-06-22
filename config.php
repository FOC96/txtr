<?php
	date_default_timezone_set('America/Mexico_City');
	error_reporting(E_ALL);
	ini_set('display_errors', 'on');

	define( 'URL' ,"http://67.205.129.22/".basename(getcwd())."/");

	define( 'CSS' , URL."public/css/");
	define( 'JS' , URL."public/js/" );
	define( 'IMG', URL."public/img/");
	define( 'LIB', URL."libs/");

	//Crean el archivo de config.js
	changeJsConfig(true);
	define( 'ID_SESSION', 'ueco217');
?>
