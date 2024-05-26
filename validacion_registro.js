$(document).ready(function () {
    // Permite solo el uso de letras en el campo de nombre
    $("#nombre").on("input", function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });

    // Permite solo el uso de letras en el campo de apellido
    $("#apellido").on("input", function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });

    $('#registro-formulario').on('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Limpia los mensajes de error
        $('.error-message').text('');

        let isValid = true;

        // Valida el nombre
        var nombre = $("#nombre").val().trim();
        if (nombre === "") {
            isValid = false;
            $("#error-nombre").text("Por favor, ingrese su nombre.");
        } else {
            $("#error-nombre").text("");
        }

        // Valida el apellido
        var apellido = $("#apellido").val().trim();
        if (apellido === "") {
            isValid = false;
            $("#error-apellido").text("Por favor, ingrese su apellido.");
        } else {
            $("#error-apellido").text("");
        }

        // Validación del correo electrónico
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

        // Valida la contraseña
        var contrasena = $("#contrasena").val().trim();
        if (contrasena === "") {
            isValid = false;
            $("#error-contrasena").text("Por favor, ingrese una contraseña.");
        } else if (contrasena.length < 8) {
            isValid = false;
            $("#error-contrasena").text("La contraseña debe tener al menos 8 caracteres.");
        } else if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(contrasena)) {
            isValid = false;
            $("#error-contrasena").text("La contraseña debe contener al menos una letra y un número.");
        } else {
            $("#error-contrasena").text("");
        }

        // Confirma la contraseña
        var confirmarContrasena = $("#confirmar-contrasena").val().trim();
        if (confirmarContrasena === "") {
            isValid = false;
            $("#error-confirmar-contrasena").text("Por favor, confirme su contraseña.");
        } else if (confirmarContrasena !== contrasena) {
            isValid = false;
            $("#error-confirmar-contrasena").text("Las contraseñas no coinciden.");
        } else {
            $("#error-confirmar-contrasena").text("");
        }

        if (isValid) {
            var usuario = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                contrasena: contrasena
            };
            localStorage.setItem(email, JSON.stringify(usuario));
            alert("Registro exitoso.");
            // Puedes redirigir a otra página o limpiar el formulario aquí
            window.location.href = "login.html";
            $('#registro-formulario')[0].reset();
        }
    });
});
