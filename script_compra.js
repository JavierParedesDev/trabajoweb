const pagoVentana = document.getElementById('pagoVentanaEmergente');
const formularioPago = document.getElementById('formularioPago');
const cerrarPagoBtn = document.getElementById('cerrarPago');

document.addEventListener('DOMContentLoaded', function() {
    const precioTotal = localStorage.getItem('precioTotal');
    const precioTotalElemento = document.getElementById('precioTotalMostrado');

    if (precioTotal) {
        precioTotalElemento.textContent = `Total a pagar: $${parseFloat(precioTotal).toLocaleString('es-CL')}`;
    } else {
        precioTotalElemento.textContent = 'Total a pagar: $0';
    }

    pagoVentana.style.display = 'block';
});

cerrarPagoBtn.addEventListener('click', function() {
    pagoVentana.style.display = 'none';
    window.location.href = 'index.html';
});

formularioPago.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validarFormularioPago()) {
        simularProcesoPago();
    }
});

function validarFormularioPago() {
    const numeroTarjeta = document.getElementById('numeroTarjeta').value.trim();
    const fechaVencimiento = document.getElementById('fechaVencimiento').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const nombreTarjeta = document.getElementById('nombreTarjeta').value.trim();

    if (!numeroTarjeta || !fechaVencimiento || !cvv || !nombreTarjeta) {
        Swal.fire("Campos incompletos", "Por favor, complete todos los campos.", "warning");
        return false;
    }

    const fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!fechaRegex.test(fechaVencimiento)) {
        Swal.fire("Fecha de vencimiento inválida", "Use el formato MM/AA.", "error");
        return false;
    }   const nombreTarjetaRegex = /^[a-zA-Z ]+$/; // Permite letras mayúsculas, minúsculas y espacios en blanco
    if (!nombreTarjetaRegex.test(nombreTarjeta)) {
        Swal.fire("Nombre de tarjeta inválido", "Ingrese un nombre de tarjeta válido.", "error");
        return false;
    }

    return true;
}

function simularProcesoPago() {
    Swal.fire({
        title: "Procesando pago...",
        text: "Por favor, espere mientras se procesa su pago.",
        icon: "info",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        timer: 2000
    });

    setTimeout(function() {
        const exito = Math.random() > 0.2;

        if (exito) {
            mostrarResultadoPago(true, '1234567890');
        } else {
            mostrarResultadoPago(false, null);
        }
    }, 2000);
}

function mostrarResultadoPago(exito, numeroTransaccion) {
    if (exito) {
        Swal.fire({
            title: "Pago procesado con éxito",
            icon: "success"
        }).then(() => {
            window.location.href = 'confirmacion.html ';
        });
    } else {
        Swal.fire({
            title: "Error al procesar el pago",
            text: "Por favor, inténtelo de nuevo.",
            icon: "error"
        }).then(() => {
            window.location.href = 'compra.html';
        });
    }
    pagoVentana.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const precioTotal = localStorage.getItem('precioTotal');
    const precioTotalElemento = document.getElementById('precioTotalMostrado');
    const pagarBtn = document.getElementById('pagarBtn');

    if (precioTotal) {
        precioTotalElemento.textContent = `Total a pagar: $${parseFloat(precioTotal).toLocaleString('es-CL')}`;
        pagarBtn.textContent = `Pagar $${parseFloat(precioTotal).toLocaleString('es-CL')}`;
    } else {
        precioTotalElemento.textContent = 'Total a pagar: $0';
        pagarBtn.textContent = 'Pagar $0';
    }

    pagoVentana.style.display = 'block';
});

function actualizarTotalEnBoton(total) {
    const pagarBtn = document.getElementById('pagarBtn');
    pagarBtn.textContent = `Pagar $${parseFloat(total).toLocaleString('es-CL')}`;
}
// Suponiendo que tengas una función para obtener el nuevo total después de cambios en el carrito
const nuevoTotal = obtenerNuevoTotal();
actualizarTotalEnBoton(nuevoTotal);
