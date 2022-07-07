class Persona{
  constructor(nombre, apellido, edad) {
    this.nombre= nombre
    this.apellido= apellido
    this.edad= edad

    this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
  }

  saludar(){
      return `Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
  }
}

const Juan = new Persona("Juan", "Garcia", 25)
const Jose = new Persona("Jose", "Saavedra", 17 )

console.log(Jose);
console.log(Juan.saludar());
console.log(Jose.saludar());

