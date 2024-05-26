
const carritoBtn = document.querySelector('.carrito-compras');
const carritoVentana = document.getElementById('carritoVentanaEmergente');
const cerrarCarritoBtn = document.getElementById('cerrarCarrito');
const carritoProductos = document.getElementById('carritoProductos');

function abrirCarrito() {
    carritoVentana.style.display = 'block';
}

function cerrarCarrito() {
    carritoVentana.style.display = 'none';
}

function agregarAlCarrito(producto) {

    const productoDiv = document.createElement('div');
    productoDiv.classList.add('carrito-producto');
    
    const imagenProducto = document.createElement('img');
    imagenProducto.src = producto.imagen;
    imagenProducto.alt = producto.nombre;
    imagenProducto.classList.add('carrito-imagen');

    const nombreProducto = document.createElement('p');
    nombreProducto.textContent = producto.nombre;

    const precioProducto = document.createElement('p');
    precioProducto.textContent = `${producto.precio}`;

    const cantidadProducto = document.createElement('input');
    cantidadProducto.type = 'number';
    cantidadProducto.value = 1;
    cantidadProducto.min = 1;

    const eliminarProductoBtn = document.createElement('button');
    eliminarProductoBtn.textContent = 'Eliminar';
    eliminarProductoBtn.classList.add('eliminar-producto');

    eliminarProductoBtn.addEventListener('click', function() {
        carritoProductos.removeChild(productoDiv);
    });


    productoDiv.appendChild(imagenProducto);
    productoDiv.appendChild(nombreProducto);
    productoDiv.appendChild(precioProducto);
    productoDiv.appendChild(cantidadProducto);
    productoDiv.appendChild(eliminarProductoBtn);

    carritoProductos.appendChild(productoDiv);
}


carritoBtn.addEventListener('click', abrirCarrito);
cerrarCarritoBtn.addEventListener('click', cerrarCarrito);


const botonesComprar = document.querySelectorAll('.productosCatalogo button');
botonesComprar.forEach(boton => {
    boton.addEventListener('click', function() {
        const producto = {
            imagen: this.parentNode.querySelector('img').src,
            nombre: this.parentNode.querySelector('h3').textContent,
            precio: this.parentNode.querySelector('.precio p').textContent
        };
        agregarAlCarrito(producto);
    });
});
