const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWNjZjMzMzVmZDU5YTNhYzRlYzFjYWFkZjZlYmFkOCIsInN1YiI6IjY1ODBjNzM5Y2VkYWM0MDgyNzdkNzg3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Jv2bkKP8rPp7N7NGgB2vb1RhAzWq8LfGK9DtcKMe6c',
  },
};

export const trendingToday = () =>
  fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));

export const getMovieById = id =>
  fetch(`https://api.themoviedb.org/3/movie/${id}language=en-US`, options)
    .then(response => response.json())

    .catch(err => console.error(err));

export const getCast = id =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => response.cast)
    .catch(err => console.error(err));

export const getReviews = id =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));

export const findMovies = querry =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${querry}&include_adult=true&language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
