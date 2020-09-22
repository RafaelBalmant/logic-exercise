<?php
function solution($str){
  if(strpos($str, "-") || strpos($str, "_")){
  	$array = strpos($str, "-") ? explode("-", $str) : explode("_", $str);	
   	$array_uppercase = array_map(function($value, $key){
  		if(!boolval($key) && !ctype_upper($value[0])){
  			return lcfirst($value);
  		}
  		return ucfirst($value);
  	}, $array, array_keys($array));
  	return join("", $array_uppercase);
  } 
}

var_dump(solution("The_Stealth_Warriorb"));
