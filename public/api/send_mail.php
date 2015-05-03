<?php
header('Access-Control-Allow-Origin: http://server.kortalh.com:4200');

// Contains our response data
$response = [
	// We'll assume the request was successful unless we hit an error
	'success'	=> true
];

$email = [
	'to'		=>	( isset($_POST['to'])		? $_POST['to']		: 'waaaghpaca@gmail.com'	),
	'from'		=>	( isset($_POST['from'])		? $_POST['from']	: null						),
	'name'		=>	( isset($_POST['name'])		? $_POST['name']	: null						),
	'subject'	=>	( isset($_POST['subject'])	? $_POST['subject']	: null						),
	'message'	=>	( isset($_POST['message'])	? $_POST['message']	: null						)
];


// An email type MUST be set
if ( !isset($_POST['type']) || empty($_POST['type']) ) {
	$response['success'] = false;
	$response['message'] = 'No Type specified';
} else {

	switch ( $_POST['type'] ) {
		case 'contact':

			// Do something
			$response['message'] = 'Mail not sent: Sending contact email is incomplete';
			$response['success'] = false;

			break;

		default:
			// No type to act on; request failed
			$response['success'] = false;
			break;
	}
}

echo json_encode($response);
?>