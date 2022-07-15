/* 
document.getElementBYid("id") - accede a un elemento a traves de su id

document | element .querySelector("SelectorCSS") - accede al primer elemento que 
coincida con el selector CSS

document | element .querySelectorALL("SelectorCSS") - accede a todos los elementos que 
coincidan con el selecotr CSS, devuelve un nodelist
*/

// const title = document.getElementById("title")

// title.textContent = "Dom - Accediendo a nodos"

// const paragraph = document.querySelector(".paragraph")

// const span = document.getElementById("title").querySelector("span")

const paragraphs = document.querySelectorAll(".paragraph")

// const paragraphsSpread = [...document.querySelectorAll(".paragraph")]

const paragraphsArray = Array.from(document.querySelectorAll(".paragraph"))

paragraphsArray.map(p=>p.style.color="blue")