<?php

function find($integers) {
    $pair = [];
    $odd = [];
    if(!is_array($integers) || count($integers) < 3){
        return "invalid array";
     }
     foreach($integers as $number){
         if(!is_int($number)){
             return "one or more numbers are not integers";
         }
        $number % 2 === 0 ? array_push($pair, $number) : array_push($odd, $number);
     }
    return count($pair) === 1 ?  $pair[0] : $odd[0];
}


