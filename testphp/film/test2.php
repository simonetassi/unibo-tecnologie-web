<?PHP
// init
	include_once("util/storage.php") ;

// check dei parametri
	if(isset($_GET['id'])) {
		$id = $_GET['id'] ;
	} else {
		$id = 0 ;
	}
	
// accesso allo storage
	$top = array('file','titolo','locandina') ;
	groupBy('file',$top,'proiezioni') ;
	$line = getRecord($id) ;
// logica dell'applicazione
	$title = $line['titolo'] ; // ." in ".count($line['proiezioni'])." cinema" ; 

	$cinema ="<ul>\n" ;
	foreach ($line['proiezioni'] as $i ) {
		$cinema .= "<li class='small'>".$i['cinema']."<br/>" ;
		$cinema .= $i['indirizzo']."<br/>" ;
		$cinema .= "Tel.: ".$i['telefono']."<br/>" ;
		$cinema .= "h: ".$i['orario']."</li>" ;
	} ;
	$cinema = $cinema."</ul>" ;
	$locandina = $line['locandina'] ;
	$titolo = $line['titolo'] ;

	
	$prec = "test2.php?id=".($id>0?$id-1:0) ;
	$seg = "test2.php?id=".($id<numRecord()-2?$id+1:numRecord()-1) ;

// presentazione
	$html = 
<<<ENDOFDATA
<html>
	<head>
		<title>$title</title>
		<link rel="stylesheet" type="text/css" href="css/base.css" />
	</head>
	<body>
		<table width="800" border="1" cellpadding="10" cellspacing="0">
			<tr>
				<td colspan="2">
					<p class="big center">Proiezioni del film <br/>$titolo</p>
				</td>
			</tr>
			<tr>
				<td rowspan="1" align="center"><img height="400" alt="locandina" src="img/$locandina"/></td>
				<td><p class="small"><b>Al cinema: </b>$cinema</td>
			</tr>
			<tr>
				<td align="left"><p class="small"><a href="$prec">&lt;- Film precedente</a></td>
				<td align="right"><p class="small"><a href="$seg">-&gt; Film seguente</a></td>
			</tr>
		</table>
	</body>
</html> 
ENDOFDATA;
	
	echo $html ; 
?>














