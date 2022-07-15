/* 
Atributos
   element.getAttribute("atribute")
   element.setAttribute("atribute", value)

clases
    element.classList.add("class", "class",...)
    element.classList.remove("class", "class",...)
    element.classList.toggle("class"[,force])
    element.classList.contains("class")
    element.classList.replace("oldclass", "newclass")

atributos directos
     id
     value
*/


const title = document.getElementById("title")
const name = document.getElementById("name")

// console.log(name.getAttribute("type"));
// name.setAttribute("type", "date" )

// title.classList.add("main-title", "other-title")
// title.classList.remove("title")

// if(title.classList.contains("title"))console.log("Title tiene la clase title");
// else console.log("Title no tiene la clase title");

// title.classList.replace("title", "main-title")

// console.log(title);
// console.log(name);

// console.log(title.innerHTML);
// console.log(title.textContent);
console.log(name.value);

