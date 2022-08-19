export default function findMovies() {
  
  const searchList = document.getElementById('search-list');
  let searchTerm =  document.getElementById('movie-search-box').value.trim();
  if (searchTerm.length > 0) {
    searchList.classList.remove('hide-search-list');
    return searchTerm;
   // loadMovies(searchTerm);
  } else {
    searchList.classList.add('hide-search-list');
  }
}