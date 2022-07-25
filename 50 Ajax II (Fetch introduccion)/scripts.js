/* 
   Fetch api 
   Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como
   peticiones y respuestas.
   Tambien provee un metodo global fetch() que proporciona una forma facil y logica de obtener
   recursos de forma asincrona por la red.
   Esta basado en promesas, por lo cual tiene un response y un reject internos.
       response tiene varios metodos:
       arrayBuffer(): Archivos binarios en bruto (mp3,pdf,jpg,etc) se utiliza cuando se necesita
       manipular el contenido del archivo
       blob(): Archivos binarios en bruto (mp3,pdf,jpg,etc) se utiliza cuando no se necesita
       manipular el contenido y se va a trabajar con el archivo directamente
       clone(): Crea u clon de un objeto de respuesta, identico en todos los sentidos, pero
       almacenado en una variable diferente
       formData(): se utiliza para leer los objetos formData
       json(): convierte los archivos json en un objeto de JavaScript
       text(): se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en
       utf-8

         Comprobacion de soporte fetch
        if(window.fetch != undefined) console.log("FETCH OK");
     else console.log("FETCH NO WORK!");
*/


const button = document.getElementById("button")

button.addEventListener("click", () =>{
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
   .then(res => res.json())
   .then(res => {
    const list = document.getElementById("list")
    const fragment = document.createDocumentFragment()
    for(const userInfo of res) {
       const listItem = document.createElement("LI")
       listItem.textContent = `${userInfo.id} - ${userInfo.name}`
       fragment.appendChild(listItem)
       
    }
    list.appendChild(fragment)
   })
})




// button.addEventListener("click", () =>{
//     let xhr
//     if(window.XMLHttpRequest){
//        xhr = new XMLHttpRequest
//     }else{
//        xhr = new ActiveXObject("Microsoft,XMLHttpRequest")
//     }

//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

//     xhr.addEventListener("load", (data) =>{
//      const dataJSON = JSON.parse (data.target.response)

//      const list = document.getElementById("list")
//      for(const userInfo of dataJSON) {
//         const listItem = document.createElement("LI")
//         listItem.textContent = `${userInfo.id} - ${userInfo.name}`
//         list.appendChild(listItem)
//      }
//     })

//     xhr.send()
// })
