import apiService from "./api.service.js";
import { getMovieTitles, search4MoviesLessThanRunningTime } from "./lib.js";

const movies = await apiService.getMovies().catch((err) => {
  console.error(`${err.message} Is the server running? 🏃🏾‍♂️`);
});

const moviesLessThan120Minutes = getMovieTitles(
  search4MoviesLessThanRunningTime(movies, 120)
);

console.log(moviesLessThan120Minutes);
