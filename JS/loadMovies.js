//load movies from API
export default async function loadMovies(searchTerm) {
  const apiKey = import.meta.env.VITE_API_KEY;

  const URL = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${apiKey}`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  console.log(data.Search);
  if ((data.Response = 'true')) return data.search;
  // displayMovieList(data.Search);
}
