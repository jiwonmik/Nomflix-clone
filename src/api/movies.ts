const BASE_PATH = 'https://api.themoviedb.org/3/movie';
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export interface IGetMoviesResult {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getNowPlayingMovies = async () => {
  return fetch(`${BASE_PATH}/now_playing?api_key=${VITE_API_KEY}`).then((response) =>
    response.json()
  );
};

export const getPopluarMovies = async () => {
  return fetch(`${BASE_PATH}/popular?api_key=${VITE_API_KEY}&page=2`).then((response) =>
    response.json()
  );
};

export const getUpcomingMovies = async () => {
  return fetch(`${BASE_PATH}/upcoming?api_key=${VITE_API_KEY}&page=2`).then((response) =>
    response.json()
  );
};
