/* 

    La destructuracion es una expresion de JavaScript 
    que hace posible la extraccion de datos de arreglos u
    objetos
*/

const person = {
    name: "Francisco",
    age: 17,
    email: "francisco@gmail.com"
}
// FORMA TRADICIONAL
// const name = person.name
// const age = person.age
// const email = person.email

//DESTRUCTURING
// const {name, age, email} = person
// const {name : nombre, age : edad, email} = person

// console.log(name, age, email);
// console.log(nombre, edad, email);



// const numbers = [1,2,3,4]

// const [a, b, secondPosition] = numbers

// console.log(secondPosition);


// const printPerson = ({ name }) =>{
//     console.log(name);
// }

// const printPerson = ({ name : nombre }) =>{
//     console.log(nombre);
// }

// printPerson(person)


const getUsers = async () =>{
    const { data : users } = await axios.get("https://jsonplaceholder.typicode.com/users")

    console.log(users);
}

getUsers()