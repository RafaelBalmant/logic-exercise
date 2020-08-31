<?php
function detect_pangram($string) { 
    $regex = "/[a-z]/";
    preg_match_all($regex, $string, $matches);
    $resultRegex = [];
    foreach( $matches[0] as $item){
        array_push($resultRegex, strtoupper($item));
    }
    $alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    $result = array_diff($alphabet, $resultRegex);
    if(count($result) === 0){
        return true;
    }
    return false;
}
