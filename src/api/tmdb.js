import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (
  page = 1
) => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular`,
    {
      params: {
        api_key: API_KEY,
        page,
      },
    }
  );

  return response.data.results;
};

export const searchMovies = async (
  query,
  page = 1
) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    }
  );

  return response.data.results;
};