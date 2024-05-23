$(document).ready(function() {
    $("#login-form").validate({
        rules:{
            username:{
                required: true,
                minlength: 4
            },  

            password:{
                required: true,
                minlength: 6
            }   
        },
        messages:{
            username:{
                required: "El usuario es requerido",
                minlength: "El usuario debe tener al menos 4 caracteres"
            },
            password:{
                required: "La contraseña es requerida",
                minlength: "La contraseña debe tener al menos 6 caracteres"
            }
        },
    });
});