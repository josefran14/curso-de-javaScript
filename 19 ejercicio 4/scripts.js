let number = prompt("Introduzca un numero");
let divisor = 0;

if (number == 1) {
  console.log("El numero no es valido");
} else {
  for (i = 2; i < number; i++)
    if (number % i == 0) {
      console.log(`${number} / ${i} = ${number / i} "este numero no es primo"`);
      divisor++;
      break;
    }
}
if(divisor==0){
    console.log(`${number} "este numero es primo"`)
}
