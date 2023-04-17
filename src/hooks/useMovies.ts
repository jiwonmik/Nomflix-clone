import { useQuery } from '@tanstack/react-query';
import { IGetMoviesResult, getNowPlayingMovies } from '../api/movies';

export const useMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'nowPlaying'], () => getNowPlayingMovies());
};
