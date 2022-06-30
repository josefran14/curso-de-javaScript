let palabras = prompt("Introduzca una palabra");
let consonantes = 0;
let vocales = 0;

for (const letra of palabras) {
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    vocales++;
  } else {
    consonantes++;
  }
}

console.log(`la palabra "${palabras}" tiene ${vocales} vocales, y ${consonantes} consonantes, y tiene un total de ${palabras.length} letras`);
