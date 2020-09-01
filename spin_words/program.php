<?php
function spinWords(string $str): string {
    $array = explode(" ",$str);
    $newArray = array_map(function ($value){
        if(strlen($value) >= 5){
            return strrev($value);
        }
        return $value;
    }, $array);
    $newString =  implode(" ", $newArray);
    return $newString;
}
?>

