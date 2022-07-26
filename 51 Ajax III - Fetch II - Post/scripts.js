/*
   Fetch Api
       Para hacer peticiones post, fetch admite un segundo parametro
       fetch(url,{
        method: "post",
        body: los datos que enviamos. si es un objeto hay que 
        convertirlo con json.stringify(datos)
        headers: {
            cabeceras de informacion sobre lo que estamos envaindo
        }
       })

*/

const button = document.getElementById("button")

button.addEventListener("click", () =>{

    const newPost = {
        title: "A new post",
        body: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        userId: 1
    }

   fetch('https://jsonplaceholder.typicode.com/posts',{
    method: "POST",
    body: JSON.stringify(newPost),
    headers:{
        "Content-type": "application/json"
    }
   })
       .then(res=>res.json())
       .then(data=>console.log(data))

})

 // console.log(newPost);
    // console.log(JSON.stringify(newPost));