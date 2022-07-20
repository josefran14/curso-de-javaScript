const button = document.getElementById("button")

/*
Objeto window - es el objeto global, de el descienden todos los obejtos
   alert()
   prompt()
   confirm()
*/

// if(confirm("Acepta?")){
//     console.log("Acepto");
// }else{
//     console.log("no acepto");
// }

/* Objeto console - es el objeto que contiene la consola del
navegador
    console.log()
    console.dir()
    console.error()
    console.table()
*/


const person = {
    name: "Francisco",
    age: 17,
    email: "fransaavedra21@gmail.com"
}

//console.table(person)

/* Objeto location - es el objeto que contiene la barra de direcciones
    location.href
    location.host
    location.pathname
    location.hash
    location.reload()
*/

/* Objeto location - es el objeto que contiene la barra de direcciones
    location.href
    location.host.
    location.protocol
    location.pathname
    location.hash
    location.reload
*/

//console.log(location.href);
//console.log(location.protocol);
//console.log(location.host);
//console.log(location.pathname);
//console.log(location.hash);
//location.reload()

//location.href = "https://google.com"

/* Objeto history

   back()
   forward()
   go(n|-n)

   length
*/

/* Objeto date


*/

//const date = new Date()

//console.log(date);

/* timers
     timeout:



     setTimeout(()=>{code}, delay-in-miliseconds) - hace que se
     ejecute la funcion despues de un dealy. si lo referenciamos
     mediante una variable/constante podemos pararlo con clearTimeout(referencia)

     interval:



      
     setInterval(()=>{code}, delay-in-miliseconds -  hace que se ejecute la
     funcion cada delay milisegundos. si lo referenciamos medainte una variable/constante
     podemos pararlo con cleanInterval(referencia) 
*/

//  button.addEventListener("click", () =>{
//        //setTimeout(saludar,3000)
//        setTimeout(() =>{
//         console.log("ADIOS");
//        },3000)
//  })

// const timeout = setTimeout(() => {
//     console.log("ADIOS");
// },3000)

// button.addEventListener("click", () =>{
//     clearTimeout(timeout)
// })


 const saludar = () =>{
    console.log("hola");
 }

//  const interval = setInterval(saludar,3000)


let cont = 0

const interval = setInterval(() =>{
    console.log(cont);
    cont ++
},3000)

button.addEventListener("click", () =>{
      clearInterval(interval)
})