$(document).ready(function() {
    //permite solo el uso de letras en el campo e nombre
     $("#nombre").on("input", function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
    //permite solo el uso de letras en el campo de apellido 
    $("#apellido").on("input", function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });

    //permite solo el uso de numeros en el campo 
    $("#telefono").on("input", function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $(".form_2").submit(function(event) {
        var isValid = true;

       // valida que tenga contenido
        var nombre = $("#nombre").val().trim();
        if (nombre === "") {
            isValid = false;
            $("#error-nombre").text("Por favor, ingrese su nombre.");
        } else {
            $("#error-nombre").text("");
        }

        // valida que tenga contenido
        var apellido = $("#apellido").val().trim();
        if (apellido === "") {
            isValid = false;
            $("#error-apellido").text("Por favor, ingrese su apellido.");
        } else {
            $("#error-apellido").text("");
        }

        // valida que contenga solo 9 digitos y que tenga contenido 
        var telefono = $("#telefono").val().trim();
        if (telefono === "") {
            isValid = false;
            $("#error-telefono").text("Por favor, ingrese su número de teléfono.");
        } else if (!/^\d{9}$/.test(telefono)) {
            isValid = false;
            $("#error-telefono").text("Por favor, ingrese un número de teléfono válido (9 dígitos).");
        } else {
            $("#error-telefono").text("");
        }

        // valida que tenga contenido
        var email = $("#email").val().trim();
        if (email === "") {
            isValid = false;
            $("#error-email").text("Por favor, ingrese su correo electrónico.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            $("#error-email").text("Por favor, ingrese un correo electrónico válido.");
        } else {
            $("#error-email").text("");
        }

        // valida que tenga contenido
        var mensaje = $("#mensaje").val().trim();
        if (mensaje === "") {
            isValid = false;
            $("#error-mensaje").text("Por favor, ingrese su mensaje.");
        } else {
            $("#error-mensaje").text("");
        }

        if (!isValid) {
            event.preventDefault(); // Prevenir el envío del formulario si hay errores
        }
});
});
