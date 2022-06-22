/*
Sintaxis simple:
switch(evaluacion){
    case n1:
        //codigo
        break;

        default:
            //codigo
} 

Sintaxis multiple:
switch(evaluacion){
    case n1:
    case n2:
    case n3:
    case n4:
    //codigo
    break;
    //codigo
}*/

let num = 3;

switch(num){
    case 1: console.log(`${num}tiene el valor 1`)
    break;
    case 2: console.log(`${num} tiene el valor 2`)
    break;
    default: console.log(`${num} no vale ni 1 ni 2`)
}

switch(num){
    case 1:
    case 3:
    case 5:
    console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    console.log(`${num} es par`);
}