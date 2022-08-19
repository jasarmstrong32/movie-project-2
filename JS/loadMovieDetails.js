export default function loadMovieDetails() {
  const movieSearchBox = document.getElementById('movie-search-box');
  const apiKey = import.meta.env.VITE_API_KEY;
  const searchList = document.getElementById('search-list');

  const searchList = document.getElementById('search-list');
  const searchListMovies = searchList.querySelectorAll('.search-list-item');
  searchListMovies.forEach((movie) => {
    movie.addEventListener('click', async () => {
      searchList.classList.add('hide-search-list');
      movieSearchBox.value = '';
      const result = await fetch(
        `https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=${apiKey}`
      );
      const movieDetails = await result.json();

      return movieDetails;

      //displayMovieDetails(movieDetails);
    });
  });
}
