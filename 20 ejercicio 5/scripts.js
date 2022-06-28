let number = prompt ("Introduzca un numero")
let result = 1

for (let i = number; i>0; i--){
    result = result * i

}

console.log(`El factorial de ${number} es = ${result}`)