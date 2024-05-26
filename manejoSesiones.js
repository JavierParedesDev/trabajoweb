var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
    $('#userGreeting').text(`Hola, ${loggedInUser.nombre}`);
    $('#loginLink').hide();
    $('#logoutLink').show();
} else {
    $('#userGreeting').text('');
    $('#loginLink').show();
    $('#logoutLink').hide();
}

// Manejar la acción de cerrar sesión
$('#logoutLink').on('click', function (event) {
    event.preventDefault();
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html'; // Redirigir al inicio
});