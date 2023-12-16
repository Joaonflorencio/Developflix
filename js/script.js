import peliculas from './peliculas.js'
console.log(peliculas)


function mostrarPeliculasPorGenero(generoId, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    const peliculasGenero = peliculas.filter((pelicula) => pelicula.genre_ids.includes(generoId));

    peliculasGenero.forEach((pelicula) => {
        const peliculaDiv = document.createElement("div");
        peliculaDiv.classList.add("pelicula");

        const titulo = document.createElement("p");
        titulo.classList.add("titulo");
        titulo.textContent = pelicula.title;

        const poster = document.createElement("img");
        poster.classList.add("poster");
        poster.src = `https://image.tmdb.org/t/p/w200${pelicula.poster_path}`;
        poster.alt = pelicula.title;

        peliculaDiv.appendChild(poster);
        peliculaDiv.appendChild(titulo);

        contenedor.appendChild(peliculaDiv);
    });
}

// Mostrar películas de acción (Género 28)
mostrarPeliculasPorGenero(28, "genero-28");

// Mostrar películas de thriller (Género 53)
mostrarPeliculasPorGenero(53, "genero-53");

// Mostrar películas de aventura (Género 12)
mostrarPeliculasPorGenero(12, "genero-12");