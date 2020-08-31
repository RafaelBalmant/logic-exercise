<?php

function findShort($str){
    $array =  explode(" ",$str);
    $numbers = [];
    foreach($array as $item){
        $numbers[$item] = strlen($item);
    }
    return min($numbers);
}

