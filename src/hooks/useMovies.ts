import { useQuery } from '@tanstack/react-query';
import {
  IGetMoviesResult,
  getNowPlayingMovies,
  getPopluarMovies,
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

export const usePopularMovies = () => {
  const { data } = useQuery<IGetMoviesResult>({
    queryKey: ['movies', 'popular'],
    queryFn: () => getPopluarMovies(),
    initialData: initialMovie,
  });
  return { popularMovie: data };
};

export const useUpcomingMovies = () => {
  const { data } = useQuery<IGetMoviesResult>({
    queryKey: ['movies', 'upcoming'],
    queryFn: () => getUpcomingMovies(),
    initialData: initialMovie,
  });
  return { upcomingMovie: data };
};
