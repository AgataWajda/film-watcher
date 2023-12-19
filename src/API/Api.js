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
