export default function displayMovieDetails(details){
  const resultGrid = document.getElementById('result-grid');
  
  resultGrid.innerHTML = `
  <div class="movie-poster">
    <img src="${details.Poster !== 'N/A' ? details.Poster : 'https://th.bing.com/th/id/OIP.ke9cNKXh8oX10dfQiEryKgAAAA?w=148&h=180&c=7&r=0&o=5&pid=1.7'}"/>
  </div>
  <div class="movie-info">
    <h3 class="movie-title">${details.Title}</h3> <div class='heart'><input type="checkbox"  value='${details.imdbID}'></div>
    <ul>
      <li class="year">Year: ${details.Year}</li>
      <li class="rated">Ratings: ${details.Rated}</li>
      <li class="released">Released: ${details.Released}</li>
    </ul>
    <p class="genre"><b>Genre:</b> ${details.Genre}</p>
    <p class="plot"><b>Plot:</b> ${details.Plot}</p>
    <p class="writer"><b>Writer:</b> ${details.Writer}</p>
    <p class="actors"><b>Actors:</b> ${details.Actors}</p>
    <p class="language"><b>Language:</b> ${details.Language}</p>
    <p class="awards"><b><i class="fasfa-award"></i></b> ${details.Awards}
    </p>
  </div> 
  `;
}