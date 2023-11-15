import peliculas from './peliculas.js'

const generos = {
    28: 'Ação',
    12: 'Aventura',
    53: 'Thriller',
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.movie-container');
  
    Object.keys(generos).forEach(generoId => {
      const filmesGenero = peliculas.filter(pelicula => pelicula.genre_ids.includes(parseInt(generoId)));
      
      if (filmesGenero.length > 0) {
        const generoDiv = document.createElement('div');
        generoDiv.className = 'genero';
        generoDiv.innerHTML = `<h2>${generos[generoId]}</h2>`;
  
        filmesGenero.forEach(pelicula => {
          const movieDiv = document.createElement('div');
          movieDiv.className = 'movie';
          movieDiv.innerHTML = `
            <h3>${pelicula.title}</h3>
            <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
          `;
          generoDiv.appendChild(movieDiv);
        });
  
        container.appendChild(generoDiv);
      }
    });
  });