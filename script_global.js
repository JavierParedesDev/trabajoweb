// Buscar productos//
document.getElementById("searchInput").addEventListener("keyup", function(){
    const searchValue = this.value.toLowerCase();
    
    const productos = document.querySelectorAll('.productosCatalogo');
   

    productos.forEach(product => {
        const productText = product.innerText.toLowerCase();
        if (productText.includes(searchValue)) {
            product.style.display = "grid";
        }
        else {
            product.style.display = "none";
        }
    })

})