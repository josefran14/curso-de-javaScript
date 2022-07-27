const buttonImg = document.getElementById("button-img")
const buttonPdf = document.getElementById("button-pdf")

buttonImg.addEventListener("click", () =>{
    fetch("images.jpeg")
    .then(res=> res.blob())
    .then(img => {
        document.getElementById("img").src = URL.createObjectURL(img)
    })
})