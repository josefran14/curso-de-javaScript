// Recorrer el DOM (DOM traversing)

/*
Padre - parent (nodo del que desciende)
  - parentNode - devuelve el nodo padre (que puede no ser un 
    elemento)
  - parentElement - devuelve el nodo elemento padre

  NOTA
  Los nodos del tipo document y documentFragment nunca van a tener
  un elemento padre, parentNode devolvera siempre Null

Hijos - child (nodo que desciende de un padre)
   - childNodes - devuelve todos los nodos hijos
   - children - devuelve todos los nodos elementos hijos
   - firstChild - devuelve el primer nodo hijo
   - firstElementChild - devuelve el primer nodo elemento hijo
   - lastChild - devuelve el ultimo nodo hijo
   - lastElementChild - devuelve el ultimo nodo elemento hijo
   - hasChildNodes() - devuelve true si el nodo tiene hijos y false
   si no tiene

Hermanos - siblings (nodo al mismo nivel)
    - nextSibling - devuelve el siguiente nodo hermano
    - nextElementSibling
    - previousSibling
    - previousElementSibling

cercano
   - closest(selector) - selecciona el nodo mas cercano qeu cumpla
   con el selector, aun es experimental
   */

   const parent = document.getElementById("parent")

   //console.log(parent.parentElement);

   //console.log(parent.childNodes);
   //console.log(parent.children);
   //console.log(parent.firstChild);
   //console.log(parent.firstElementChild);
   //console.log(parent.lastChild);
   //console.log(parent.lastElementChild);
   //console.log(parent.hasChildNodes());
   //console.log(parent.firstChild.hasChildNodes());

   //console.log(parent.nextSibling);
   //console.log(parent.parentElement.nextElementSibling);
   console.log(parent.parentElement.previousSibling);
   console.log(parent.parentElement.previousElementSibling);
