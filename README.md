# Movies 🎥 Drill

To get started, run `npm install` and then `npm run db` to start a local mock database server that uses `db.json` as its data source. You will need to keep this running, so open a separate terminal window to run your app (`node app/index.js`)

1. Create a file, `api.service.js` in the `app` folder.
1. **Export** a function called `getMovies` uses `fetch` to retrieve the **array** of movie objects. Assuming that you have the `json-server` running, you will retrieve the data from this endpoint: `http://localhost:3000/movies`.
1. From the `app/index.js` file, import the `getMovies` function and call it. Log the result to the console. You should see an array of movie objects. Don't forget to `await`.

---

Create a file `app/lib.js`. Given an array of movie objects, write a function called `getMovieTitles` that returns an array of movie titles.
From the `app/index.js` file, import the `getMovieTitles` function and call it, logging the movie titles.

---

In the `app/lib.js`, write a function `search4Movie`. In this 1️⃣, you will pass in any string along with an array of movies. Use `filter` to return a new array that contains only the movies that _include_ the search string in their title. For example, if you pass in the string `the` and the array of movies, you should get back an array of movies that have the word `the` in their title. You can use the `includes` method to check if a string is included in another string.
Once again, import the `search4Movie` function and call it, logging the result.

---

In the `app/lib.js`, write a function `search4MovieByYearRange`. In this 3️⃣, you will pass in a start year and an end year and an array of movies. Use `filter` to return a new array that contains only the movies that were released between the start year and the end year that you passed in.

---

In the `app/lib.js`, write a function `rentMovie`. Take in the movies array along with the `id` of a movie. Use `map` to return a new array of movies such that `numbersInStock` is reduced by 1. If the movie is not found `throw` an error.

---

Write a function, `addReview`. This will take in a movies array, movie id and a review string. Use `map` to return a new array of movies such that the movie with the matching id has the review string added to its `reviews` array. If the movie is not found `throw` an error.
