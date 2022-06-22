/* Bucles*/

/*
     Determinados

     bucle for of / in

     for(let variable of estructura){
         codigo a ejecutar
     }
*/

let names = ["Paco", "Jose", "Paula", "Maria"]

for(let i = 0; i < names.length; i++){
    if(names[i]=== "Paula"){
        continue
    }
    console.log(names[i])
}

 for(let name of names){
     if(name==="Paula"){
         continue
     }
     console.log(name);
 }

 for(let index in names){
     if(names[index]==="Paula"){
         continue
     }
     console.log(index)
 }