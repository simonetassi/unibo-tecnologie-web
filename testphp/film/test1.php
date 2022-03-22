<?PHP
require_once("util/storage.php") ; 
	$top = array('file','titolo','locandina') ;
	groupBy('file',$top,'proiezioni') ;

?>
<html>
	<head>
		<title>
<?PHP 
	if(isset($_GET['id'])) {
		echo getField($_GET['id'],'titolo')." in ".count(getField($_GET['id'],'proiezioni'))." cinema " ; 
	} else {
		echo "Nessun film" ; 
	}
?>
		</title>
		<link rel="stylesheet" type="text/css" href="css/base.css" />
	</head>
	<body>
		<table width="800" border="1" cellpadding="10" cellspacing="0">
			<tr>
				<td colspan="2">
					<p class="big center">Scheda del film <br/>
<?PHP 
	if(isset($_GET['id'])) {
		echo getField($_GET['id'],'titolo') ; 
	} else { 
		echo "" ;
	}
?>
					</p>
				</td>
			</tr>
			<tr>
				<td rowspan="1"><img height="400" align="center" alt="locandina" src="img/
<?PHP 
	if(isset($_GET['id'])) {
		echo getField($_GET['id'],'locandina') ; 
	} else { 
		echo "" ;
	}
?>
				"/></td>
				<td><p class="small"><b>Al cinema: </b>
<?PHP 
	if(isset($_GET['id'])) {
		echo "<ul>\n" ;
		foreach (getField($_GET['id'],'proiezioni') as $i ) {
			echo "<li class='small'>".$i['cinema']."<br/>" ;
			echo $i['indirizzo']."<br/>" ;
			echo "Tel.: ".$i['telefono']."<br/>" ;
			echo "h: ".$i['orario']."</li>" ;
		} ;
		echo "</ul>" ;
	} else {
		echo "" ;
	}
?>
				</td>
			</tr>
			<tr>
				<td align="left"><p class="small"><a href="test1.php?id=
<?PHP 
	if(isset($_GET['id']) && $_GET['id']>0) {
		echo $_GET['id']-1 ; 
	} else {
		echo "0" ;
	}
?>
				">&lt;- Film precedente</a></td>
				<td align="right"><p class="small"><a href="test1.php?id=
<?PHP 
	if(isset($_GET['id']) && $_GET['id']<=numRecord()-2) {
		echo $_GET['id']+1 ; 
	} else { 
		echo numRecord()-1 ;
	}
?>
				">-&gt; Film seguente</a></td>
			</tr>
		</table>
	<body>
</html>



	



