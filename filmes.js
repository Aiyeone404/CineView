const container = document.getElementById('movies-container');
const APIKey = 'de0111cf3d6170de8893187f1c582521';
const url = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function getPopularMovies() {
    const response = await fetch(`${url}/movie/popular?api_key=${APIKey}&language=pt-BR`);
    const data = await response.json();
    showMovies(data.results);
    console.log(data);
}
function showMovies(movies) {
    container.innerHTML = '';
    movies.forEach(movie => {
        const div = document.createElement('div');
        const link = document.createElement('a');  
        link.href = `./filme-id.html?id=${movie.id}`;
        link.target =  "_blank"; 
        div.classList.add('movie');
        div.innerHTML = `
            <img src="${IMG_URL + movie.poster_path}" alt="">
            <h3></h3>
        `;
        link.appendChild(div);
        container.appendChild(link);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    getPopularMovies();
});