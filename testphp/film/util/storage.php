<?PHP
global $data, $oldData, $dataPath ; 
$data = array(); 

$dataPath = 'util/prog.json' ;

function getRecord($i) {
	global $data; 
	if (count($data) == 0) loadData();
	return $data[$i] ;
}

function getField($r,$f) {
	global $data; 
	if (count($data) == 0) loadData();
	return $data[$r][$f] ;
}

function getAll() {
	global $data; 
	if (count($data) == 0) loadData();
	return $data ;
}

function numRecord() {
	global $data ;
	if (count($data) == 0) loadData();
	return count($data) ; 
}

function loadData() {
	global $data, $dataPath ;
	$string = file_get_contents($dataPath);
	$data=json_decode($string,true);

}


function groupBy($field,$topfields,$groupName) {
	global $data, $oldData ;
	if (count($data) == 0) loadData();
	$result = array();
	foreach ($data as $item) {
		$id = $item[$field];
		if (isset($result[$id])) {
			foreach ($topfields as $i) {
				unset($item[$i]) ;
			}
			$result[$id][$groupName][] = $item;
		} else {
			$rec = array() ;
			foreach ($topfields as $i) {
				$rec[$i] = $item[$i] ;
				unset($item[$i]) ;
			}
			$rec[$groupName][] = $item ;
			$result[$id] = $rec;
		}
	}
	foreach($result as $key => $item) {
		$result[] = $item ;
		unset($result[$key]) ;
	}
	$oldData = $data; 
	$data = $result ;
}

function groupReset() {
	global $data, $oldData ;
	$data = $oldData ;	
}



?>

