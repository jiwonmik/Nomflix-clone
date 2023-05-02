import { useQuery } from '@tanstack/react-query';
import { IGetMoviesResult, getPopluarMovies, getNowPlayingMovies } from '../api/movies';

export const useNowPlayingMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'nowPlaying'], () => getNowPlayingMovies());
};

export const usePopularMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'latest'], () => getPopluarMovies());
};
