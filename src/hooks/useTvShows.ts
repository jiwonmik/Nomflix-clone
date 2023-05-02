import { useQuery } from '@tanstack/react-query';
import { IGetTvShowsResult, getPopularTvShows } from '../api/shows';

export const usePopularTvShows = () => {
  return useQuery<IGetTvShowsResult>(['tv', 'popular'], () => getPopularTvShows());
};
