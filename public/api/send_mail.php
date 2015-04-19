<?php
header('Access-Control-Allow-Origin: http://server.kortalh.com:4200');

if ( !isset($_POST['success']) ) {
	$_POST['success'] = true;

} else if ( $_POST['success'] == 'false' || $_POST['success'] == false ) {
	$_POST['message'] = 'Major critical meltdown!';
}


echo json_encode($_POST);
?>