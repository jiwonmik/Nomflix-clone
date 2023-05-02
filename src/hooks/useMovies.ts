import { useQuery } from '@tanstack/react-query';
import {
  IGetMoviesResult,
  getPopluarMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
} from '../api/movies';

export const useNowPlayingMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'nowPlaying'], () => getNowPlayingMovies());
};

export const usePopularMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'popular'], () => getPopluarMovies());
};

export const useUpcomingMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'upcoming'], () => getUpcomingMovies());
};
