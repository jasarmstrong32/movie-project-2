export default function favorites() {
  const hearts = document.querySelectorAll("input[type='checkbox']:checked");
  let favoriteMovies = [];

  hearts.forEach((heart) => {
      favoriteMovies.push(heart.value);
    }
  });

  function loadMovieDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
      movie.addEventListener('click', async () => {
        searchList.classList.add('hide-search-list');
        // movieSearchBox.value = "";
        const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=${apiKey}`);
        const movieDetails = await result.json();

        displayMovieDetails(movieDetails);
      });

  function loadFavoriteMovies(){
    const FavoritesListMovies = favorites.querySelectorAll('.favoritesitem');
    favoritesListMovies.forEach(movie => {
      movie.addEventListener('click', async () => {
        const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=${apiKey}`);
        const favoriteMovieDetails = await result.json();

        favorites(favoriteMovieDetails);
      });
  console.log(favoriteMovies);
}


function favorites() {
  const hearts = document.querySelectorAll("input[type='checkbox']:checked");
  let favoriteMoviesArr = [];

  hearts.forEach((heart) => {
    favoriteMoviesArr.push(heart.value);
  }
});

  favorites.innerHTML = '';
  for(let i = 0; i < favoriteMoviesArr.length; i++){
    let favoritesListItem = document.createElement('div');
    favoritesListItem.dataset.id = favoriteMoviesArr[i].imdbID;
    favoritesListItem.classList.add('favorites-list-item');
    if(favoriteMovies[i].Poster !== 'N/A')
      moviePoster = favoriteMoviesArr[i].Poster;
    else
      moviePoster = `${noImgFound}`;

      favoritesListItem.innerHTML = `
    <div class="search-item-thumbnail">
        <img src="${moviePoster}" alt="Poster" />
    </div>
    <div class="search-item-info">
        <h3>${movies[i].Title}</h3>
         <p>${movies[i].Year}</p>
         <div class='heart'><input type="checkbox" value='${movies[i].imdbID}'></div>
      </div>
    `;

    favorites.appendChild(movieListItem);
  }

  hearts.forEach((heart) => {
      favoriteMovies.push(heart.value);
    }
  });
  favorites.innerHTML = `
  <div class="favorites-item">
    <div class="favorites-item-thumbnail">
      <img
        src="https://th.bing.com/th/id/OIP.Jlp7M_dVz9RwOw9RZDYXSwHaE0?w=286&h=186&c=7&r=0&o=5&pid=1.7"
        alt="Poster"
      />
    </div>
    <div class="favorites-item-info">
      <h3>Movie Title</h3>
      <p>Movie release year</p>
    </div>
  </div>
  `

  console.log(favoriteMovies);
}