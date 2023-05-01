import { useQuery } from '@tanstack/react-query';
import { IGetTvShowsResult, getTvPopularShows } from '../api/shows';

export const useTvShows = () => {
  return useQuery<IGetTvShowsResult>(['tv', 'popular'], () => getTvPopularShows());
};
