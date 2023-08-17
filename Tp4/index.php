<?php
    $aux=33;
    $semana=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    $cosas=["piedra",35,true];

   /* $planeta=array();
    $planeta[]="urano";
    $planeta[]="tierra";
    $planeta[]="Saturno";
    $planeta[]="venus";
    $planeta[]="jupiter";*/
    $numeros=[2,23,2,1,2,10];
    $numeros2=[3,8,4,5,9,6];
    $valorr=2;
    /*EJERCICIO 1
    function sumar_numeros($array){
        $suma=0;
        foreach ($array as $elemento) {
            $suma=$suma+$elemento;
        }
        return $suma;
    }
    $resultado=sumar_numeros($numeros);
    echo($resultado);
    foreach ($planeta as $key => $value) {
        echo($value);
    }
    */
    /*EJERCICIO 2
    sort($numeros);
    foreach ($numeros as $value) {
        echo($value.",");
    }*/
    /* EJERCICIO 3
    $resultado=array_unique($numeros);
    print_r($resultado);
    */
    /* EJERCICIO 4
    function buscar_numeros($valor,$array){
        $indices=[];
            $I=0;
        foreach ($array as $value) {
            if ($valor==$value) {
                $indices[]=$I;
            }
            $I=$I+1;
        }
        return $indices;
    }
    $resultado=buscar_numeros($valorr,$numeros); 
    var_dump($resultado);*/
    /* EJERCICIO 5
    $mezcla=array_merge($numeros,$numeros2);
    function buscar_pares($array){
        $impare=[];
        foreach ($array as $value) {
            if (($value % 2)!==0) {
                $impare[]=$value;
            }
        }
        return $impare;
    }
    $resultado=buscar_pares($mezcla);
    print_r($resultado);*/
?>