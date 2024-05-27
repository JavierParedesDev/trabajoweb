const carritoBtn = document.querySelector('.carrito-compras');
const carritoVentana = document.getElementById('carritoVentanaEmergente');
const cerrarCarritoBtn = document.getElementById('cerrarCarrito');
const carritoProductos = document.getElementById('carritoProductos');
const totalCarrito = document.getElementById('totalCarrito'); // Nuevo elemento para mostrar el total

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
    actualizarNotificacionCarrito();
    actualizarTotalCarrito();
});

document.addEventListener('DOMContentLoaded', function() {
    const irAlPagoBtn = document.getElementById('irAlPagoBtn');
    irAlPagoBtn.addEventListener('click', function() {
        if (carritoProductos.children.length > 0) {
            window.location.href = 'compra.html';
        } else {
            alert('¡El carrito está vacío! Agrega productos antes de proceder al pago.');
        }
    });
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
    precioProducto.textContent = producto.precio;
    precioProducto.classList.add('precio-producto');

    const cantidadProducto = document.createElement('input');
    cantidadProducto.type = 'number';
    cantidadProducto.value = 1;
    cantidadProducto.min = 1;
    cantidadProducto.addEventListener('change', actualizarTotalCarrito);

    const eliminarProductoBtn = document.createElement('button');
    eliminarProductoBtn.textContent = 'Eliminar';
    eliminarProductoBtn.classList.add('eliminar-producto');

    eliminarProductoBtn.addEventListener('click', function() {
        carritoProductos.removeChild(productoDiv);
        actualizarNotificacionCarrito();
        actualizarTotalCarrito();
    });

    productoDiv.appendChild(imagenProducto);
    productoDiv.appendChild(nombreProducto);
    productoDiv.appendChild(precioProducto);
    productoDiv.appendChild(cantidadProducto);
    productoDiv.appendChild(eliminarProductoBtn);

    carritoProductos.appendChild(productoDiv);
    actualizarTotalCarrito();
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

function actualizarTotalCarrito() {
    let total = 0;
    const productos = document.querySelectorAll('.carrito-producto');
    productos.forEach(producto => {
        const precio = parseFloat(producto.querySelector('.precio-producto').textContent.replace('$', '').replace('.', ''));
        const cantidad = parseInt(producto.querySelector('input').value);
        total += precio * cantidad;
    });
    totalCarrito.textContent = `Total: $${total.toLocaleString('es-CL')}`;
    const precioTotalCampo = document.getElementById('precioTotal');
    precioTotalCampo.value = total;
    
}

document.addEventListener('DOMContentLoaded', function() {
    const cantidadProductosGuardada = obtenerCantidadProductosEnCarrito();
    const carritoNotificacion = document.getElementById('carritoNotificacion');
    carritoNotificacion.textContent = cantidadProductosGuardada;
    actualizarTotalCarrito();
});