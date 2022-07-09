/* 
Crea una clase libro
La clase libro tendra titulo, autor, año y genero.
Crea un metodo que devuelva toda la informacion del libro.
pide 3 libros y guardalos en un array.
Los libros se introduciran al arrancar el programa pidiendo
los datos con prompt.
Validar que los campos no se introduzcan vacios 
Validar que el año sea un numero y tenga 4 digitos
Validar que el genero sea: Aventuras, terror o fantasia
crea una funcion que muestre todos los libros 
crea una funcion que muestre los autores ordenados
alfabeticamente.
crea una funcion que pida un genero y muestre la informacion 
de los libros que pertenezcan a ese genero usanado en el metodo
que devuelve la informacion */

class Book {
  constructor(title, author, year, gender) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }

  getAuthor(){
      return this.author
  }

  getGender(){
      return this.gender
  }

  bookInfo() {
    return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`;
  }
}

let books = [];

while (books.length < 3) {
  let title = prompt("Introduce el titulo del libro");
  let author = prompt("Introduce el autor del libro");
  let year = prompt("Introduce el año del libro");
  let gender = prompt("Introduce el genero del libro").toLowerCase();

  if (
    title != "" &&
    author != "" &&
    !isNaN(year) &&
    year.length == 4 &&
    (gender == "aventura" || gender == "terror" || gender == "fantasia")){

     books.push(new Book(title, author, year, gender))

  }
}

const showALLBooks = () => {
    console.log(books);
    }


const showAuthors = () => {
      let authors = []

      for (const book of books){
        authors.push(book.getAuthor())
      }

      console.log(authors.sort());
}

const showGender = () =>{
    const gender = prompt("Introduce el genero a buscar")
    for (const book of books){
        if(book.getGender() == gender){
         console.log(book.bookInfo());
        }
}
}
//showALLBooks()
 //showAuthors()
 showGender()

 