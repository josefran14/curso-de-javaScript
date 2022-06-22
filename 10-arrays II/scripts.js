
let numbers = [1,2,3,4,5,1];

/*

    Arrays - propiedad
       Array.length - devuelve el numero de posiciones que contiene eal array
*/

// console.log(numbers.length)
/*
   Arrays - metodos
       Array.isArray(variable a evaluar) - devuelve true si la variable es un array
*/

// let number = 4;
// console.log(Array.isArray(number));
// console.log(Array.isArray(numbers));
/*

    Eliminar un elemento
       .shift() - elimina el primer elemento del array y devuelve ese elemento
       .pop() - elimina el ultimo elemento de un array y devuelve ese elemento
*/

//  console.log(numbers);
//  let deletedElement = numbers.shift();
//  console.log(numbers);
//  console.log(deletedElement);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
/*

    Añadir elementos
       .push(element1,element2...) - añade uno o mas elementos al final del array
       y devuelve la nueva longitud
       .unshift(elemnt1,element2...) - añade uno o mas elementos al comienzo del array
       y devuelve la nueva longitud
*/

// console.log(numbers);
// let newLength = numbers.push(6);
// console.log(numbers);
// // console.log(newLength);
// let newLength2 = numbers.unshift(0);
// console.log(numbers);



/*
     .indexOF() - Devuelve el primer indice del elemento que coincida con el
     valor especificado, o -1 si ninguno es encontrado
*/

// console.log(numbers);
// console.log(numbers.indexOf(1))
/*
     .lastindexOF() - Devuelve el ultimo indicedel elemento que coincida con el
     valor especificado, o -1 si ninguno es encontrado
*/

// console.log(numbers);
// console.log(numbers.lastIndexOf(1))

/*
     .reverse() - Invierte el orden de los elementos del array
*/

// console.log(numbers);
// numbers.reverse();
// console.log(numbers)

/*
     ..join("separador") - Devuelve un string con el separador que
     indiquemos, por defecto son comas
*/

// console.log(numbers);
// let arrayString = numbers.join(" ")
// console.log(arrayString);
// console.log(numbers.join("-"));

/*
     .splice(a,b,items) - cambia el contenido de un array eliminando
     elemetnos existentes y/o agregando nuevos elementos
     a - indice de inicio
     b - numero de elementos (opcional)
*/

// console.log(numbers);
//numbers.splice(3) - elimina desde la posicion a hasta el final
// numbers.splice(2,2); - elimina desde la poscion a el numero de valores que le
//indiquemos
// numbers.splice(2,2,10,20,30); - si b es un valor distinto de 0 elimina el 
//numero de valores que indiquemos en b y añade los valores de items a partir 
//de la posicion a
// numbers.splice(4,0,10,23,54); - si b vale 0 añade los elementos a partir de
//la poscion a y no elimina ninguno
// console.log(numbers);

/*
     .slice(a,b) - extrae elementos de un array desde el indice a hasta el
     indice b si no existe b lo hace desde a hasta el final, si no existe
     ni a ni b hace una copia del original
*/

// let newNumbers = numbers.slice()
// console.log(numbers);
// console.log(newNumbers);

// let newNumbers = numbers.slice(2)
// console.log(numbers);
// console.log(newNumbers);

//  let newNumbers = numbers.slice(2,4)
//  console.log(numbers);
//  console.log(newNumbers);