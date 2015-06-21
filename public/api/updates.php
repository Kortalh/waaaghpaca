<?php
require 'redbean/rb.php';
require 'config.php';
header('Access-Control-Allow-Origin: ' . $localUrl);


// Retrieve the 5 most recent updates
$updates = R::findAll('updates', 'ORDER BY timestamp DESC LIMIT 5');

// Contains our response data
$response = new stdClass();
$response->updates = R::exportAll($updates);

// Convert to JSON and end
echo json_encode( $response );


R::close();
?>