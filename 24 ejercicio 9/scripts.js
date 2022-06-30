const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

let dni =prompt("introduzca su DNI")
if(dni.length == 8 &&  parseInt(dni) > 0){
    let letra = dni % 23
    console.log(`el dni completo es ${dni} ${letras[letra]}`)
}