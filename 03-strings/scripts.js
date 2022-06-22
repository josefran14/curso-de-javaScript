// Strings

let cadena = "Hola Mundo";

// Propiedades
// length -> Devuelve la longitud de la cadena

// console.log(cadena.length);

// Metodos

// Todos los metodos devuelven una cadena nueva, la cadena original 
// no sera modificada

// toUpperCase() -> Devuelve la cadena a mayusculas 

// console.log(cadena.toUpperCase());

// let cadenaMayus = cadena.toUpperCase();
// console.log(cadenaMayus);

// toLowerCase() -> Devuelve la cadena a minusculas

// console.log(cadena.toLowerCase());

// indexOF(string) -> Devuelve la posicion en la que se encuentra el
// string, si no lo encuentra devuelve -1

/*console.log(cadena.indexOf("o"))*/
// console.log(cadena.indexOf("Hola"));

/*replace(valor a buscar, valor nuevo) -> remplaza el fragmento de la
cadena que le digamos y pone el valor nuevo */

// console.log(cadena.replace("Mundo", "Yotube"));

/* substring(inicio {,fin}) -> Extrae los caracteres desde incio
hasta fin (el final no se incluye)

si no se incluye el fin extrae hasta el final. */

// console.log(cadena.substring(3));
// console.log(cadena.substring(3, 7));

/* slice(incio {,fin}) -> Igual que substring pero admite valores
negativos, si ponemos valores negativos empezara desde atras

si no se incluye se extrae hasta el final

(2-4) -> Empieza a contar en el tercer caracter y los 4
ultimos no los considera*/

// console.log(cadena.slice(-3));
// console.log(cadena.slice(2));
// console.log(cadena.slice(0,-2));

/* trim() -> Elimina los espacios al inicio y al final de la cadena*/

// let cadena2 = "Hola youtube, estamos trabajando con cadenas";

// console.log(cadena2.trim());

/* ES6

starsWith(valor {,inicio}) -> sirve para saber si la cadena 
empieza con ese valor. Devuelve true o false */

// console.log(cadena.startsWith("H"));
// console.log(cadena.startsWith("h"));
// console.log(cadena.startsWith("M", 5));

/* endsWith(valor {,longitud}) -> Sirve para saber si la cadena
termina con ese valor. Devuelve true o false */

// console.log(cadena.endsWith("o"));
// console.log(cadena.endsWith("a",4));
// console.log(cadena.endsWith("n",8));
// console.log(cadena.endsWith("Mundo"));

/* includes(valor {,inicio}) -> Igual que indexOF pero devuelve true
o false */

// console.log(cadena.includes("n"));
// console.log(cadena.includes("a",5));
// console.log(cadena.includes("a",2));

/* repeat(valor) -> repite el string el numero de veces que le
indiquemos*/

// let cadena3 = "Hola";

// console.log(cadena3.repeat(3));
// console.log("r".repeat(10));

/* Template strings*/

let nombre = "Jose";
let apellido = "Saavedra";
let edad = 18;

console.log("Hola " + nombre + " " + apellido + ". tienes " + edad + " años ");

