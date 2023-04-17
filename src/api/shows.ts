const BASE_PATH = 'https://api.themoviedb.org/3/tv';
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export interface IGetTvShowsResult {
  page: number;
  results: ITvShow[];
  total_pages: number;
  total_results: number;
}

export interface ITvShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export const getTvPopularShows = async () => {
  return fetch(`${BASE_PATH}/popular?api_key=${VITE_API_KEY}`).then((response) => response.json());
};
