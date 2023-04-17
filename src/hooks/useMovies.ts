import { useQuery } from '@tanstack/react-query';
import { IGetMoviesResult, getNowPlayingMovies } from '../api/movies';
import { IGetTvShowsResult, getTvPopularShows } from '../api/shows';

export const useMovies = () => {
  return useQuery<IGetMoviesResult>(['movies', 'nowPlaying'], () => getNowPlayingMovies());
};

export const useTvShows = () => {
  return useQuery<IGetTvShowsResult>(['tv', 'popular'], () => getTvPopularShows());
};
