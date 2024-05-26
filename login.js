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

        // Si es válido, verifica los datos en localStorage
        if (isValid) {
            var usuario = JSON.parse(localStorage.getItem(username));
            if (usuario && usuario.contrasena === password) {
                alert("Sesión iniciada.");
                localStorage.setItem('loggedInUser', JSON.stringify(usuario));
                window.location.href = 'index.html'; // Redirigir al usuario a la página principal
            } else {
                alert("Usuario no encontrado o contraseña incorrecta.");
            }
        }
    });
});
