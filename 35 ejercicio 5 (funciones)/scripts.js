const Mifuncion = (a,b,c,d,e,f) =>{
    let sumaRest= a+b-c
    let multiplication = sumaRest * d
    let division = multiplication / e
    let potencia = (Math.pow(division,f))

    return potencia
}
console.log(Mifuncion(4,8,5,3,2,4));