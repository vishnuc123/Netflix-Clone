const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const now_playing_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
export const popular_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
export const top_Rated_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
export const Upcoming_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`

