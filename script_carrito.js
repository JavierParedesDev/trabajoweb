// Asignación de elementos
const carritoBtn = document.querySelector('.carrito-compras');
const carritoVentana = document.getElementById('carritoVentanaEmergente');
const cerrarCarritoBtn = document.getElementById('cerrarCarrito');
const carritoProductos = document.getElementById('carritoProductos');

// Funciones de abrir y cerrar carrito
function abrirCarrito() {
    carritoVentana.style.display = 'block';
}

function cerrarCarrito() {
    carritoVentana.style.display = 'none';
}

// Asegurarse de que el carrito esté cerrado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cerrarCarrito();
});

// Función de agregar al carrito
function agregarAlCarrito(producto) {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('carrito-producto');

    const imagenProducto = document.createElement('img');
    imagenProducto.src = producto.imagen;
    imagenProducto.alt = producto.nombre;
    imagenProducto.classList.add('carrito-imagen');

    const nombreProducto = document.createElement('p');
    nombreProducto.textContent = producto.nombre;

    const precioProducto = document.createElement('h3');
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
        actualizarNotificacionCarrito();
    });

    productoDiv.appendChild(imagenProducto);
    productoDiv.appendChild(nombreProducto);
    productoDiv.appendChild(precioProducto);
    productoDiv.appendChild(cantidadProducto);
    productoDiv.appendChild(eliminarProductoBtn);

    carritoProductos.appendChild(productoDiv);

}

// Event listeners
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
        actualizarNotificacionCarrito();
    });
});
function contarProductosEnCarrito() {
    
    console.log(carritoProductos.children.length);
    return carritoProductos.children.length;
}

function actualizarNotificacionCarrito() {
    const cantidadProductos = contarProductosEnCarrito();
    const carritoNotificacion = document.getElementById('carritoNotificacion');
    carritoNotificacion.textContent = cantidadProductos;

    localStorage.setItem('cantidadProductosEnCarrito', cantidadProductos);
}

function obtenerCantidadProductosEnCarrito() {
    return localStorage.getItem('cantidadProductosEnCarrito') || 0;
}

document.addEventListener('DOMContentLoaded', function() {
    const cantidadProductosGuardada = obtenerCantidadProductosEnCarrito();
    const carritoNotificacion = document.getElementById('carritoNotificacion');
    carritoNotificacion.textContent = cantidadProductosGuardada;
});