const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")

// button.addEventListener("click", () =>{
// console.log("Click");
// })

// button.addEventListener("dblclick", () =>{
//     console.log("Doble Click");
// })

// box.addEventListener("mouseenter", () =>{
//     box.classList.replace("red", "green")
// })

// box.addEventListener("mouseleave", () =>{
//     box.classList.replace("green", "red")
// })

//  box.addEventListener("mousedown", () =>{
//      console.log ("HAS PULSADO EN LA CAJA");
// })

// box.addEventListener("mouseup", () =>{
//     console.log ("HAS SOLTADO EL BOTON IZQUIERDO EN LA CAJA");
// })

// box.addEventListener("mousemove", () =>{
//     console.log("ESTAS MOVIENDO EL RATON EN LA CAJA");
// })

input.addEventListener("keydown", () =>{
    console.log("HAS PULSADO UNA TECLA");
})

input.addEventListener("keyup", () =>{
    console.log("HAS SOLTADO UNA TECLA");
})

input.addEventListener("keypress", () =>{
    console.log("ESTAS PULSANDO UNA TECLA");
})