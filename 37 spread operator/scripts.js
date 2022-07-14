/*
Spread Operator (Operador de expansion)

su sintaxis es ... */

// const numbers = [-12,2,3,23,43,2,3]

// console.log(...numbers);


// Enviar elementos de un array a una funcion

// const addNumbers = (a,b,c) =>{
//     console.log(a+b+c);
// }

// let numbersToAdd = [1,2,3]

// addNumbers(...numbersToAdd)


// Añadir un array a otro array

// let users = ["javier", "david", "rosa", "juan", "mercedes"]

// let newUsers = ["marta", "jaime", "laura"]

// users.push(...newUsers)

// console.log(users);

// Copiar arrays

// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1]

// console.log(arr2);


// Concatenar arrays

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8]

// let arrConcant = [...arr1, ...arr2]
// console.log(arrConcant);


// Envair un numero indefinido de argumentos a un afuncion
// (parametros rest)


// const restParms = (...numbers) =>{
//         console.log(numbers);
// }

// restParms(1,2,3,4,5,6,7,8)


// Librerio math

const numbers = [-12,2,3,23,43,2,3]

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// Eliminar elementos duplicados

console.log([...new Set (numbers)]);