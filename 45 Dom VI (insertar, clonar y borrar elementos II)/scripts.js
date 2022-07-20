/*
Insertar y eliminar elementos II

    parent.insertBefore(newElement,referenceElement) - insertar un 
    elemento antes del elemento de referencia

    SOPORTE total 
    parent.insertAdjacentElement(position,element)

    parent.insetAdjacentHtml(position,Html)
    parent.insertAdjacentText(position,text)

    positions:
       beforebegin - antes de que empiece (hermano anterior)
       afterbegin - despues de que termine (primer hijo)
       beforeend - antes de que acabe (ultimo hijo)
       afterend - despues de que termine (hermano siguiente)

       parent.replaceChild(newChild,oldChild) - remplaza un hijo por otro
*/
const list = document.getElementById("list")
const newElement = document.createElement("li")
newElement.textContent = "I am a new element"

//list.insertBefore(newElement, list.children[1])

//list.children[0].insertAdjacentElement("beforebegin", newElement)
//list.insertAdjacentElement("afterbegin", newElement)
//list.insertAdjacentElement("beforeend", newElement)
//list.children[1].insertAdjacentElement("afterend", newElement)

//list.children[1].insertAdjacentHTML("afterend", "<li>Elemento con HTML</li>")
//list.children[1].insertAdjacentText("afterend", "<li>Elemento con HTML</li>")

//list.replaceChild(newElement, list.children[0])

/*
   positions:
      parent.before() - antes de que empiece (hermano anterior)
      parent.prepend() - despues de que empiece (primer hijo)
      parent.append() - antes de que acabe (ultimo hijo)
      parent.after() - despues de que acabe (hermano siguiente)

      child.replace(newChild)
*/

//list.children[0].before(newElement)
//list.prepend(newElement)
//list.append(newElement)
//list.children[0].after(newElement)

//list.children[0].replaceWith(newElement)
//document.getElementById("child-to-replace").replaceWith(newElement)

/*
    clonar y eliminar elementos:
       element.clodeNode(true|false) - clona el nodo. si le pasamos 
       true clona todo el elemento con los hijos, si le pasamos
       false clona solo el elemento sin hijos

       element.remove() - eleimina el nodo del DOM
       element.removeChild(child) - elimina el nodo hijo del DOM
*/

//list.after(list.cloneNode(true))

//list.remove()

list.removeChild(list.children[1])