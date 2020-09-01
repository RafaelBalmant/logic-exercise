<?php

function find_missing_letter($array): string {
	$numberOfLetter = 0;
	$alphabet = [];
	while($numberOfLetter <= 25){
		array_push($alphabet, chr(65 + $numberOfLetter));
		$numberOfLetter++;
	}
	function setUpperCase($value){
		return strtoupper($value);	
	}
     $arrayUpper = array_map("setUpperCase", $array);
	 $firstLetter = strtoupper($arrayUpper[0]);
	 $lastLetter = strtoupper( $arrayUpper[count($arrayUpper) - 1]);
	 $firstLetterPlace = array_search($firstLetter, $alphabet);
	 $lastLetterPlace = array_search($lastLetter, $alphabet);
	 $intevalNumber = $lastLetterPlace - $firstLetterPlace ;
	 $intevalAlphabet = [];
	 $var = 0;
     while($var <= $intevalNumber){
		array_push($intevalAlphabet, $alphabet[$firstLetterPlace + $var]);
		$var++;
	 }
	 $letter = array_diff($intevalAlphabet, $arrayUpper);
	 $result;
	 foreach($letter as $value){
		$result = $value;
	 }
	 return ctype_upper($array[0]) ? strtoupper($result) : strtolower($result);
  }
	var_dump(find_missing_letter(["O", "Q", "R", "S"]));
?>
