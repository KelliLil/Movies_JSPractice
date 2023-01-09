import got from "got";

const BASE_URL = "http://localhost:3000/movies";

export default {
  getMovies() {
    // This returns a promise that resolves to the JSON response
    // No need to await anything here
    // The caller will await the promise returned by this function
    return got(BASE_URL).json();
  },
};
