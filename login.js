$(document).ready(function () {
    $('#login-form').on('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Limpia los mensajes de error
        $('.error-message').text('');

        let isValid = true;

        // Valida el nombre de usuario (email)
        var username = $("#username").val().trim();
        if (username === "") {
            isValid = false;
            $("#error-username").text("Por favor, ingrese su nombre de usuario.");
        } else {
            $("#error-username").text("");
        }

        // Valida la contraseña
        var password = $("#password").val().trim();
        if (password === "") {
            isValid = false;
            $("#error-password").text("Por favor, ingrese su contraseña.");
        } else {
            $("#error-password").text("");
        }

        if (isValid) {
            var usuario = JSON.parse(localStorage.getItem(username));
            if (usuario && usuario.contrasena === password) {
                // Mostrar el mensaje de éxito
                $('#successMessage').fadeIn();

                // Ocultar el mensaje y redirigir después de 3 segundos
                setTimeout(function() {
                    $('#successMessage').fadeOut();
                    window.location.href = 'index.html';
                }, 3000);

                // Guardar el usuario como logueado
                localStorage.setItem('loggedInUser', JSON.stringify(usuario));
            } else {
                // Mostrar el mensaje de error en el modal
                $('#erroriniciar').fadeIn();

                // Ocultar el modal después de 3 segundos
                setTimeout(function() {
                    $('#erroriniciar').fadeOut();
                }, 3000);
            }
        }
    });
});
