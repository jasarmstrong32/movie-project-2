export default function displayMovieList(movies) {
  const searchList = document.getElementById('search-list');
  let moviePoster = '';
  const noImgFound =
    'https://th.bing.com/th/id/OIP.ke9cNKXh8oX10dfQiEryKgAAAA?w=148&h=180&c=7&r=0&o=5&pid=1.7';

  searchList.innerHTML = '';
  for (let i = 0; i < movies.length; i++) {
    let movieListItem = document.createElement('div');
    movieListItem.dataset.id = movies[i].imdbID;
    movieListItem.classList.add('search-list-item');
    if (movies[i].Poster !== 'N/A') moviePoster = movies[i].Poster;
    else moviePoster = `${noImgFound}`;

    movieListItem.innerHTML = `
      <div class="search-item-thumbnail">
          <img src="${moviePoster}" alt="Poster" />
      </div>
      <div class="search-item-info">
          <h3>${movies[i].Title}</h3>
           <p>${movies[i].Year}</p>
           <div class='heart'><input type="checkbox" value='${movies[i].imdbID}'></div>
        </div>
      `;
    console.log(movies[i].imdbID);

    searchList.appendChild(movieListItem);
  }

  // loadMovieDetails();
}
