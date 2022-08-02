/* 
    Expresiones regulares:
        Son una secuencia de caracteres que forman un patron de busqueda,
        principalmente utilizada para la busqueda de patrones de cadenas
        de caracteres u operaciones de sustituciones

    Sintaxis:
        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayusculas y minusculas
        g: global. Busca de forma, es decir, no se para despues de
        la primera coincidencia

    Comodines:
        -Sustitucion: define un comodin dentro del patron.
        El simbolo es el "."

        -Listado de caracteres validos: Entre corchetes se pone una
        lista de los caracteres validos. [aeiou] con esto cogeriamos
        toda las vocales

        -Rangos: Entre corchetes si ponemos un guion entre dos caracteres
        establecemos un rango. [a-z] todas las letras minusculas

        -Mezcla entre rangos y listas:
           Podemos unir las dos anteriores en una sola expresion
           [0-5ou] serian numeros del 0 al 5, la letra "o" y la
           letra "u"

        -Cadenas comppletas:
           Para establecer una cadena completa debe ir entre 
           parentesis, si queremos mas palabras iran separas por 
           un pibe. (lorem|amet) es valida la palabra "lorem" y
           la palabra "amet"

    Delimitadores:
        ^ Antes de este simbolo no puede haber nada
        $ Despues de este simbolo no puede haber nada
        ^hola$ 
    Cantidad:
        - llaves: lo que esta antes tiene que aparecer la cantidad
        exacta de veces. Hay tres combinaciones posibles.
           {n} se tiene que repetir n veces
           {n,m} se tiene que repetir entre n y m veces, ambos incluidos
           {n,} se tiene que repetir como minimo n veces y sin maximo
        ^[a-zA-Z] {1,3} @{1}$
        -asterisco: lo que esta antes del asterisco puede estar, puede
        no estar y se puede repetir.  . *@.*\..*
        -interrogacion: lo que esta antes del asterisco puede no estar, pero
        si esta solo puede aparecer una vez.
           ^[ae]?$
        -operador +: lo que esta antes del + tiene que estar una vez como minimo
        A-[0-9]+
    Caracteres:
        \s: coincide con un caracter de espacio, entre ellos incluidos espacio,
        tab, salto de pagina, salto de linea, y retorno de carro. ^[a-zA-Z]*\s[a-zA-Z]+$
        \S: coincide con todo menos caracteres de espacio ^\S{5}$
        \d: coincide con un caracter de numero. Equivalente a [0-9] ^\d{5}$
        \D: coincide con cualquier caracter no numerico. Equivalenete a [^0-9] ^{5}$
        \w: coincide con cualquier caracter alfanumerico, incluyendo el quien bajo.
        Equivalente a {A-Za-z0-9_} ^\w+@$
        \W: coincide con todo menos caracteres de palabras ^\W+$
*/

const text = document.getElementById("text").textContent
const regEx = /lorem/gi
const regEx2 = new RegExp("lorem", "gi")
const regEx3 = new RegExp("/lorem/", "gi")

console.log(regEx.test(text));
console.log(text.includes("Lorem"));