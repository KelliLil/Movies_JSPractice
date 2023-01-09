import { convertRunningTime2Minutes } from "./utils.js";

export const addReview = ({ movies, id, newReview }) => {
  // Find the movie
  const movie2Review = movies.find((movie) => movie._id === id);

  // TODO: Handle this in an Express response handler
  if (!movie2Review) {
    throw new Error("Movie not found");
  }

  // Logical OR short-circuiting
  // If the 'reviews' property is undefined, then we set it to an empty array
  const currentReviews = movie2Review.reviews || [];

  // Use the spread operator to return a new object
  // All properties and values are the same
  // except for the 'reviews' property
  // We spread out the existing reviews array and add the new review
  return { ...movie2Review, reviews: [...currentReviews, newReview] };
};

export const getMovieTitles = (movies) => movies.map((movie) => movie.title);

export const rentMovie = (movies, id2Find) => {
  // Find the movie
  const movie2Rent = movies.find((movie) => movie._id === id2Find);

  // Use the spread operator to return a new object
  // All properties and values are the same
  // except for the 'numberInStock' property
  return { ...movie2Rent, numberInStock: movie2Rent.numberInStock - 1 };
};

export const search4MoviesBySearchTerm = (movies, search) =>
  // The filter method returns a new array with all elements that pass the true/false test implemented by the provided callback function (predicate callback function).
  movies.filter((movie) => movie.title.includes(search));

export const search4MoviesLessThanRunningTime = (movies, runningTimeMinutes) =>
  // The filter method returns a new array with all elements that pass the true/false test implemented by the provided callback function (predicate callback function).
  movies.filter((movie) => {
    const movieMinutes = convertRunningTime2Minutes(movie.runningTime);

    return movieMinutes <= runningTimeMinutes;
  });

export const search4MoviesByYearRange = ({ movies, startYear, endYear }) =>
  movies.filter((movie) => {
    // As per the dataset, the year is the first 4 characters of the publishDate property
    // So we slice the first 4 characters and convert it to a number
    const publishYear = Number(movie.publishDate.slice(0, 4));
    return publishYear >= startYear && publishYear <= endYear;
  });
