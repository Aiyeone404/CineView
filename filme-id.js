const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const url = 'https://api.themoviedb.org/3';
const APIKey = 'de0111cf3d6170de8893187f1c582521';
const IMG_URL = 'https://image.tmdb.org/t/p/w500'; 
async function GetMovieDetails() {
  if (movieId) { 
    const response = await fetch(`${url}/movie/${movieId}?api_key=${APIKey}&language=pt-BR`);
    const data = await response.json();
    showMovieDetails(data);
  } else {
    console.error('ID do filme não encontrado na URL');
  }
}
function showMovieDetails(movie) {
  const movieDetailsContainer = document.getElementById('movie-details');
  movieDetailsContainer.innerHTML = `
    <h1 class="title-overview">${movie.title}</h1>
    <img class="poster-detalhes" src="${IMG_URL + movie.poster_path}" alt=" ${movie.title}">
    <p class="sinopse"><strong>Sinopse:</strong> ${movie.overview}</p>
    <p class="lancamento-data"><strong>Data de lançamento:</strong> ${movie.release_date}</p>
    <p class="avaliaçao"><strong>Avaliação:</strong> ${movie.vote_average}  / 10<i class="fa-solid fa-star" style="color: #FFD43B;"> </i></p>
  `;
}
document.addEventListener('DOMContentLoaded', GetMovieDetails); 