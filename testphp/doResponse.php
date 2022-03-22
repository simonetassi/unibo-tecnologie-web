<?php
function get_raw_http_request() {

  $request = "{$_SERVER['REQUEST_METHOD']} {$_SERVER['REQUEST_URI']} {$_SERVER['SERVER_PROTOCOL']}\r\n";

  foreach (getallheaders() as $name => $value) {
    $request .= "$name: $value\r\n";
  }

  $request .= "\r\n" . file_get_contents('php://input');

  return $request;
}

	$type = $_SERVER['REQUEST_METHOD'] ;
	if ( $type == 'GET') {
		$array = $_GET  ;
	} else {
		$array = $_POST ; 
	}

  if ($_SERVER['HTTP_REFERER']!=='') {
    $referer = $_SERVER['HTTP_REFERER'] ;
    $goback = "<a href='$referer'>Go back</a>";
  } else {
  	$goback = '';
  }
  
	$table = "" ; 	
	foreach($array as $i => $v) {
		$table .= "<tr><th class='rowheader'>$i</th><td>$v</td></tr>\n" ;
	}
	$request = '<pre>' . get_raw_http_request() . '</pre>';

	$table2 = "<tr><th class='rowheader'>HTTP method</th><td>$type</td></tr>\n" ; 	
	$table2 .= "<tr><th class='rowheader'>Full HTTP request</th><td>$request</td></tr>\n" ; 

/*	
	$server= '<pre>' . print_r($_SERVER,true) . '</pre>';
	$table2 .= "<tr><th class='rowheader'>SERVER</th><td>$server</td></tr>\n" ; 
*/	
	$return = <<<EOT
<!DOCTYPE html>
<html>
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<style>
@import url('//fonts.googleapis.com/css?family=Roboto');
@import url('//fonts.googleapis.com/css?family=Montserrat');

table {
	margin-bottom: 2em; 
    border-spacing: 0px;
    border-collapse: separate;
	width: 80% ;
	max-width: 80% !important; 
	margin-left: 10%; 
}

tr {
  margin: 0px; 	  
}

h1,p {
  font-family: 'Roboto', sans-serif;
  text-align: center; 
}


th {
  font-family: 'Roboto', sans-serif;
  margin: 0px; 
  padding: 1em;
}
td {
  font-family: 'Montserrat', sans-serif;
  margin: 0px; 
  padding: 1em; 
}

pre {
    white-space: pre-line;
    width: 65vw !important; 
    max-width: 65vw !important; 
    overflow-wrap: break-word; 
}

.header {
	background-color: #ffff88; 
	color: #0000ff; 
}	
.rowheader {
	background-color: #ffffdd; 
}	
		</style>
	</head>
	<body>
		<h1>Data received with this request</h1>
		<table border="1">
			<col width='10%'>
			<col width='90%'>
		<tbody>
			<tr><th class='header'>Field name</th><th class='header'>Field value</th></tr>
			$table
		</tbody>
		</table>
		<table border="1">
			<col width='10%'>
			<col width='90%'>
		<tbody>
			<tr><th class='header'>Info</th><th class='header'>Value</th></tr>
		$table2
		</tbody>
		</table>
		<p>$goback</p>
	</body>
</head>
EOT;

echo $return ; 
?>

