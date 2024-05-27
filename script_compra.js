// Elementos del formulario de pago
const pagoVentana = document.getElementById('pagoVentanaEmergente');
const formularioPago = document.getElementById('formularioPago');
const cerrarPagoBtn = document.getElementById('cerrarPago');

document.addEventListener('DOMContentLoaded', function() {
    pagoVentana.style.display = 'block';
    const precioTotalCampo = document.getElementById('precioTotal');
    const precioTotalElemento = document.getElementById('precioTotalMostrado');
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

    // Validación básica de los campos
    if (!numeroTarjeta || !fechaVencimiento || !cvv || !nombreTarjeta) {
        swal("Campos incompletos", "Por favor, complete todos los campos.", "warning");
        return false;
    }

    // Validación adicional
    const fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!fechaRegex.test(fechaVencimiento)) {
        swal("Fecha de vencimiento inválida", "Use el formato MM/AA.", "error");
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
            title: "Pago procesado con exito",
            text: `Número de transacción: ${numeroTransaccion}`,
            icon: "success"
        }).then(() => {
            window.location.href = 'confirmacion.html';
        });
    } else {
        Swal.fire({
            title: "Error al procesar el pago",
            text: "Por favor, intente de nuevo.",
            icon: "error"
        }).then(() => {
            window.location.href = 'compra.html';
        });
    }
    pagoVentana.style.display = 'none';
}
