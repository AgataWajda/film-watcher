import axios from 'axios';

const API_KEY = 'baccf3335fd59a3ac4ec1caadf6ebad8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const trendingToday = () =>
  axios
    .get(`trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data)
    .catch(err => console.error(err));

export const getMovieById = id =>
  axios
    .get(`movie/${id}?api_key=${API_KEY}`)
    .then(response => response.data)

    .catch(err => console.error(err));

export const getCast = id =>
  axios
    .get(`movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => response.data)
    .then(response => response.cast)
    .catch(err => console.error(err));

export const getReviews = id =>
  axios
    .get(`/movie/${id}/reviews?api_key=${API_KEY}`)
    .then(response => response.data)
    .then(response => response.results)
    .catch(err => console.error(err));

export const findMovies = query =>
  axios
    .get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`)
    .then(response => response.data)
    .then(response => response.results)
    .catch(err => console.error(err));
