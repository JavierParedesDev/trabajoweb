// Función para generar un número aleatorio 
const generateRandomPrice = (min, max) => {
    const randomPrice = (Math.random() * (max - min) + min).toFixed(3);
    return `$ ${randomPrice}`; // Retorna el precio formateado con el signo de dólar
};

// API Key para acceder a la API de RawG
const apiKey = '5d8268fe9e5d4bf4a755e5555211d68e';

const getPopularGames = () => {
    const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2022-01-01,2023-12-31&ordering=-added&page_size=10`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const gameListContainer = document.getElementById('game-list');

            data.results.forEach(game => {
                const gameItem = document.createElement('div');
                gameItem.classList.add('game-item'); 

                const precioFormateado = generateRandomPrice(10, 60);

                gameItem.innerHTML = `
                    <h2>${game.name}</h2>
                    <img class="img-api" src="${game.background_image}" alt="${game.name}">
                    <p>Release Date: ${game.released}</p>
                    <p>Platforms: ${game.platforms.map(platform => platform.platform.name).join(', ')}</p>
                    <p>Genres: ${game.genres.map(genre => genre.name).join(', ')}</p>
                    <p>Rating: ${game.rating}</p>
                    <p>Valor: ${precioFormateado}</p>
                    <button>Comprar</button>
                `;
                gameListContainer.appendChild(gameItem);
            });
        })
        .catch(error => {
            console.error('Error fetching game information:', error);
        });
};

getPopularGames();
