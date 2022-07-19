/* DOM - crear e insertar elementos 

crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = codigo HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de codigo: document.createDocumentFragment()
*/

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

const title = document.getElementById("title")
const daysList = document.getElementById("daysList")
const selectDays = document.getElementById("daysSelect")

//  const itemList = document.createElement("LI")
//   itemList.textContent = "Lunes"

//  daysList.appendChild(itemList)


title.innerHTML = "DOM - <span>Crear e insertar elementos I</span>"


const fragment = document.createDocumentFragment()


// for(day of days){
//     const itemList = document.createElement("LI")
//    itemList.textContent = day
//    fragment.appendChild(itemList)
// }

// daysList.appendChild(fragment)


for(const day of days){
    const selectItem = document.createElement("OPTION")
    selectItem.setAttribute ("value", day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment)

