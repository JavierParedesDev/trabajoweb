document.getElementById("mouse").addEventListener("click", function(){
    const products = document.querySelectorAll('.productosCatalogo');


    products.forEach(product => {
        if (product.id === "mouse") {
            product.style.display = "grid";
        }
        else {
            product.style.display = "none";
        }
    })


})

document.getElementById("teclado").addEventListener("click", function(){
    const products = document.querySelectorAll('.productosCatalogo');


    products.forEach(product => {
        if (product.id === "teclado") {
            product.style.display = "grid";
        }
        else {
            product.style.display = "none";
        }
    })


})
document.getElementById("audifonos").addEventListener("click", function(){    
    const products = document.querySelectorAll('.productosCatalogo');


    products.forEach(product => {
        if (product.id === "audifonos") {
            product.style.display = "grid";
        }
        else {
            product.style.display = "none";
        }
    })      

})

document.getElementById("monitores").addEventListener("click", function(){
    const products = document.querySelectorAll('.productosCatalogo');


    products.forEach(product => {
        if (product.id === "monitores") {
            product.style.display = "grid";
        }
        else {
            product.style.display = "none";
        }
    })


})

document.getElementById("silla-gamers").addEventListener("click", function(){
    const products = document.querySelectorAll('.productosCatalogo');


    products.forEach(product => {
        if (product.id === "silla-gamers") {
            product.style.display = "grid";
        }
        else {
            product.style.display = "none";
        }
    })


})

const all_product = document.getElementById("all_product");
all_product.addEventListener("click", function(){
    const products = document.querySelectorAll('.productosCatalogo');
    products.forEach(product => {
        product.style.display = "grid";
    })
})

