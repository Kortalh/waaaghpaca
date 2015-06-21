<?php
header('Access-Control-Allow-Origin: http://server.kortalh.com:4200');
require 'config.php';


// Contains our response data
$response = new stdClass();
$response->updates = array(
	array(
		"id" => "1",
		"content" => "<p>Much like the Warhammer world, these pages lay dormant. As the Age of Sigmar begins, so too will a new age of <span class=\"orkfont\">WaAagHpaca</span>...</p>",
		"timestamp" => "1434891600"
	),
	array(
		"id" => "2",
		"content" => "An update from last month!",
		"timestamp" => "1431561600"
	),
	array(
		"id" => "3",
		"content" => "An even older post!",
		"timestamp" => "1424044800"
	)
);

echo json_encode($response);
?>