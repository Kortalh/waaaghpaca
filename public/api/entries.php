<?php
require 'redbean/rb.php';
require 'config.php';
header('Access-Control-Allow-Origin: ' . $localUrl);


// Contains our response data
$response = new stdClass();

$response->entries = R::getAll('SELECT
		players.name AS player,
		teams.name AS team,
		armies.name AS army,
		entries.* FROM entries
		LEFT JOIN players ON players.id = entries.player_id
		LEFT JOIN teams ON teams.id = entries.team_id
		LEFT JOIN armies ON armies.id = entries.army_id
		GROUP BY entries.id
	');

// Convert to JSON and end
echo json_encode( $response );


R::close();
?>