import {loadMovies} from './JS/loadMovies.js';
import {findMovies} from './JS/findMovies.js';
import {displayMovieList} from './JS/displayMovieList.js';
import {loadMovieDetails} from './JS/loadMovieDetails.js';
import {displayMovieDetails} from './JS/displayMovieDetails.js';

const apiKey = import.meta.env.VITE_API_KEY;
const noImgFound = "https://th.bing.com/th/id/OIP.ke9cNKXh8oX10dfQiEryKgAAAA?w=148&h=180&c=7&r=0&o=5&pid=1.7";

const movieSearchBox = document.getElementById('movie-search-box').addEventListener('input', findMovies);
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');
const favorites = document.getElementById('favorites');
let moviePoster= '';

const searchterm = findMovies();
const dataSearch = loadMovies(searchterm);
displayMovieList(dataSearch);
const movieDetails = loadMovieDetails();
displayMovieDetails(movieDetails);


// const button = document.querySelector('button');

// button.addEventListener('click', findMovies());

// //load movies from API
// async function loadMovies(searchTerm) {
//   const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${apiKey}`;
//   const res = await fetch(`${URL}`);
//   const data = await res.json();
//   console.log(data.Search);
//   if ((data.Response = 'true')) displayMovieList(data.
//     Search);
// }

// function findMovies() {
//   let searchTerm =  document.getElementById('movie-search-box').value.trim();
//   console.log(searchTerm);
//   if (searchTerm.length > 0) {
//     searchList.classList.remove('hide-search-list');
//     loadMovies(searchTerm);
//   } else {
//     searchList.classList.add('hide-search-list');
//   }
// }

// function displayMovieList(movies) {
//   searchList.innerHTML = '';
//     for(let i = 0; i < movies.length; i++){
//       let movieListItem = document.createElement('div');
//       movieListItem.dataset.id = movies[i].imdbID;
//       movieListItem.classList.add('search-list-item');
//       if(movies[i].Poster !== 'N/A')
//         moviePoster = movies[i].Poster;
//       else
//         moviePoster = `${noImgFound}`;

//       movieListItem.innerHTML = `
//       <div class="search-item-thumbnail">
//           <img src="${moviePoster}" alt="Poster" />
//       </div>
//       <div class="search-item-info">
//           <h3>${movies[i].Title}</h3>
//            <p>${movies[i].Year}</p>
//            <div class='heart'><input type="checkbox" value='${movies[i].imdbID}'></div>
//         </div>
//       `;
//       console.log(movies[i].imdbID)

//       searchList.appendChild(movieListItem);
//     }

//     loadMovieDetails();
//   }

  // function loadMovieDetails(){
  //   const searchListMovies = searchList.querySelectorAll('.search-list-item');
  //   searchListMovies.forEach(movie => {
  //     movie.addEventListener('click', async () => {
  //       searchList.classList.add('hide-search-list');
  //       // movieSearchBox.value = "";
  //       const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=${apiKey}`);
  //       const movieDetails = await result.json();

  //       displayMovieDetails(movieDetails);
  //     });
  //   });
  // }

// function displayMovieDetails(details){
//   resultGrid.innerHTML = `
//   <div class="movie-poster">
//     <img src="${details.Poster !== 'N/A' ? details.Poster : 'https://th.bing.com/th/id/OIP.ke9cNKXh8oX10dfQiEryKgAAAA?w=148&h=180&c=7&r=0&o=5&pid=1.7'}"/>
//   </div>
//   <div class="movie-info">
//     <h3 class="movie-title">${details.Title}</h3> <div class='heart'><input type="checkbox"  value='${details.imdbID}'></div>
//     <ul>
//       <li class="year">Year: ${details.Year}</li>
//       <li class="rated">Ratings: ${details.Rated}</li>
//       <li class="released">Released: ${details.Released}</li>
//     </ul>
//     <p class="genre"><b>Genre:</b> ${details.Genre}</p>
//     <p class="plot"><b>Plot:</b> ${details.Plot}</p>
//     <p class="writer"><b>Writer:</b> ${details.Writer}</p>
//     <p class="actors"><b>Actors:</b> ${details.Actors}</p>
//     <p class="language"><b>Language:</b> ${details.Language}</p>
//     <p class="awards"><b><i class="fasfa-award"></i></b> ${details.Awards}
//     </p>
//   </div> 
//   `;
// }
window.addEventListener('click', (event) => {
  if(event.target.className !== "form-control"){
    searchList.classList.add('hide-search-list');
  }
});