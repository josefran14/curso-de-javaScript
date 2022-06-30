let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

let color = prompt("Introduzca un color").toLowerCase();

if (colores.indexOf(color) !== -1) {
  console.log("el color si se encuentra en el array");
} else {
  console.log("el color no se encuentra");
}
