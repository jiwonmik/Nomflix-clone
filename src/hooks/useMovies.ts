import { useQuery } from '@tanstack/react-query';
import {
  IGetMoviesResult,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../api/movies';

const initialMovie = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useNowPlayingMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'nowPlaying'], () => getNowPlayingMovies());
};

export const useTopRatedMovies = () => {
  const { data } = useQuery<IGetMoviesResult>({
    queryKey: ['movies', 'topRated'],
    queryFn: () => getTopRatedMovies(),
    initialData: initialMovie,
  });
  return { topRatedMovies: data };
};

export const useUpcomingMovies = () => {
  const { data } = useQuery<IGetMoviesResult>({
    queryKey: ['movies', 'upcoming'],
    queryFn: () => getUpcomingMovies(),
    initialData: initialMovie,
  });
  return { upcomingMovie: data };
};
