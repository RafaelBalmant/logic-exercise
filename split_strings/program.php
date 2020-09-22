<?php

function solution($str){
	if(strlen($str) === 0){
		return [];
	}
	$array_string = str_split($str, 2);
	$array_new = array_map(function($value){
		if(strlen($value) < 2){
			return $value . "_";
		}
		return $value;
	}, $array_string);
	return $array_new;
}

var_dump(solution(""));
