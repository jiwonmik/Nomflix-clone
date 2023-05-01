import { useQuery } from '@tanstack/react-query';
import { IGetMoviesResult, getLatestMovies, getNowPlayingMovies } from '../api/movies';

export const useNowPlayingMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'nowPlaying'], () => getNowPlayingMovies());
};

export const useLatestMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'latest'], () => getLatestMovies());
};
