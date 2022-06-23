let figura=prompt("Introduce la figura")

let base
let altura
let radio

switch(figura){
    case "triangulo":
        base=prompt("Ingrese la base del triangulo")
        altura=prompt("Ingrese la altura del triangulo")
        console.log(`El area del triangulo es ${(base*altura)/2}`)
        break
    case "rectangulo":
        base=prompt("Ingrese la base del rectangulo")
        altura=prompt("Ingrese la altura del rectangulo")
        console.log(`El area del rectangulo es ${(base*altura)}`)
        break
    case "circulo":
    radio=prompt("Ingrese el radio del circulo")
    console.log(`El area del circulo es ${Math.PI * Math.pow(radio,2)}`)
    default:
        window.alert("Ingresa el nombre de la figura correctamente")
}