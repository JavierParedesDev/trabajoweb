// Elementos del formulario de pago
const pagoVentana = document.getElementById('pagoVentanaEmergente');
const formularioPago = document.getElementById('formularioPago');
const cerrarPagoBtn = document.getElementById('cerrarPago');

document.addEventListener('DOMContentLoaded', function() {
    pagoVentana.style.display = 'block';
    const precioTotalCampo = document.getElementById('precioTotal');
    const precioTotalElemento = document.getElementById('precioTotalMostrado');
    precioTotalElemento.textContent = `$${parseFloat(precioTotalCampo.value).toLocaleString('es-CL')}`;
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
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Validación adicional
    const fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!fechaRegex.test(fechaVencimiento)) {
        alert('Fecha de vencimiento inválida. Use el formato MM/AA.');
        return false;
    }
    return true;
}

function simularProcesoPago() {
    alert('Procesando pago...');

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
        alert(`Pago exitoso. Número de transacción: ${numeroTransaccion}`);
        window.location.href = 'confirmacion.html';
    } else {
        alert('Error en el pago. Por favor, intente de nuevo.');
    }
    pagoVentana.style.display = 'none';
}
