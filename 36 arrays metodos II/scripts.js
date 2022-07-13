/*
Arrays metodos II

.from(iterable) - conveirte en array el elemento iterable

.sort([callback]) - ordena los elementos de un array 
alfabeticamenete (valor unicode), si le pasamos un callback
los ordena en funcion del algoritmo que le pasemos

.forEach(callback(currentValue,[index] - ejecuta la funcion
 indicada una vez por cada elemento del array
 
 .some(callback) - comprueba si al menos un elemento del array
 cumple la condicion

.every(callback) - comprueba si todos los elementos del array
cumplen la condicion

.map(callback) - transforma todos los elementos del array y
devuelve un nuevo array 

.filter(callback) - filtra todos los elementos del array que
cumplan la condicion y devuelve un nuevo array

.reduce(callback) -reduce todos los elementos del array a un
unico valor */

/*FROM*/
// let word = "Hola Mundo"

// console.log(Array.from(word));
// console.log(word.split(" "));


/*SORT*/
    // const letters = ["b", "c", "z", "a"]
    // const numbers = [1,8,100,300,3]

    // console.log(letters.sort());
    // console.log(numbers.sort());

    // console.log(numbers.sort((a,b) => a-b));


/*forEACH*/

    // const numbers = [12,25,47,84,98]

    // numbers.forEach((number) => console.log(number))
    // numbers.forEach((number,index) =>
    //     console.log(`${number} esta en la posicion ${index}`))


/* SOME / EVERY*/

    // const words = ["HTML", "CSS", "JavaScript", "PHP"]

    // console.log(words.some(word => word.length > 10))
    // console.log(words.every(word => word.length > 2))


/* MAP*/

    // const numbers = [12,25,47,84,98]

    // numbers.map(number => console.log(number*2))

    // const numbers2 = numbers.map(number => number * 2)

    // console.log(numbers2);


/*FILTER*/

    // const numbers = [12,25,47,84,98]

    // const numbers2 = numbers.filter(number => number > 80)

    // console.log(numbers2);


/*REDUCE*/

// const numbers = [1,2,3,4,5]

// console.log(numbers.reduce((a,b) => a+b))

const users = [
    {
        name: "user1",
        online: true
    },
    {
        name: "user2",
        online:true
    },
    {
        name: "user3",
        online: false
    },
    {
        name: "user1",
        online: true
    },
    {
        name: "user1",
        online: false
    },
    {
        name: "user1",
        online: true
    }
]

const usersOnline = users.reduce((cont, user) =>{
    if(user.online) cont ++
    return cont
},0)

console.log(`Hay ${usersOnline} usuarios conecatdos`);