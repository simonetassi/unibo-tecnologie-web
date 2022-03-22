<?PHP
// init
	include_once("util/storage.php") ;
	$style = "util/cinema.xsl" ; 

// check dei parametri
	$id = 0; 
	if(isset($_GET['id'])) $id = $_GET['id'] ;
	$debug = false; 
	if(isset($_GET['debug'])) $debug = true ;	
	
// accesso allo storage
	$top = array('file','titolo','locandina') ;
	groupBy('file',$top,'proiezioni') ;
	$line = getRecord($id) ;

// logica dell'applicazione

	$dom = new DOMDocument('1.0', 'iso-8859-1');
	$root = createSon($dom,"film") ;
	createAttribute($root,"id",$id) ;
	createAttribute($root,"max",numRecord()) ;
	createSon($root,"locandina",$line['locandina']) ;
	createSon($root,"titolo",$line['titolo']) ;
	$sale = createSon($root,"sale") ;
	foreach ($line['proiezioni'] as $i ) {
		$sala = createSon($sale,"sala") ;
		createSon($sala,'cinema',$i['cinema']) ;
		createSon($sala,'indirizzo',$i['indirizzo']) ;
		createSon($sala,'telefono',$i['telefono']) ;
		createSon($sala,'orario',$i['orario']) ;
	} ;
	
// accesso alla presentation
	if ($debug) {
		echo "<pre>".htmlentities($dom->saveXML())."</pre>" ;
	} else {
		echo transform($dom,$style) ;
	} 
	
// fine applicazione






// funzioni di supporto


function transform($doc,$style) {
	if (file_exists($style)) {
		$xsl = new DOMDocument('1.0', 'iso-8859-1');
		$xsl->load($style);
		$xp = new XsltProcessor();
		$xp->importStylesheet($xsl);
		return $xp->transformToXML($doc) ; 
	} else {
		return $doc; 
	}
}

function createSon($from,$to,$string=null) {
	global $dom;
	$n = $dom->createElement($to) ;
	$from->appendChild($n) ;	
	if ($string!==null) {
		$s = $dom->createTextNode($string) ;
		$n->appendChild($s) ;
	}
	return $n ;
}

function createAttribute($from,$name,$value) {
	global $dom;
	$n = $dom->createAttribute($name) ;
	$from->appendChild($n) ;
	$t = $dom->createTextNode($value) ;
	$n->appendChild($t) ;
	return $n;
}

?>
