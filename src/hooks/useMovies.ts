import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovies } from '../api/movies';

export interface IMovieRes {
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

export const useMovies = () => {
  return useQuery<IMovieRes[]>(['movies', 'nowPlaying'], () => getNowPlayingMovies());
};
