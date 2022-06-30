let numbers = [2,4,5,6,8];
 let pares = [];
 let impares = [];
 for (const num of numbers){
     let random = Math.round(Math.random()* 10 + 1)
     const result = num * random
     if(result % 2 === 0){
         pares.push(result)
     }
     else{
         impares.push(result)
     }
 }

 console.log(pares)
 console.log(impares)
 
