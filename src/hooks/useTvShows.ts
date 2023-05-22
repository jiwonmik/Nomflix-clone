import { useQuery } from '@tanstack/react-query';
import {
  IGetTvShowsResult,
  getAiringTodayTvShows,
  getOnTheAirTvShows,
  getPopularTvShows,
} from '../api/shows';
import { getTopRatedMovies } from '../api/movies';

export const useAiringTodayTvShows = () => {
  return useQuery<IGetTvShowsResult>(['tv', 'airingToday'], () => getAiringTodayTvShows());
};

export const useOnTheAirTvShows = () => {
  const { data } = useQuery<IGetTvShowsResult>({
    queryKey: ['tv', 'onTheAir'],
    queryFn: () => getOnTheAirTvShows(),
  });
  return { onTheAirTv: data };
};

export const usePopularTvShows = () => {
  const { data } = useQuery<IGetTvShowsResult>({
    queryKey: ['tv', 'popular'],
    queryFn: () => getPopularTvShows(),
  });
  return { popularTv: data };
};

export const useTopRatedTvShows = () => {
  const { data } = useQuery<IGetTvShowsResult>({
    queryKey: ['tv', 'topRated'],
    queryFn: () => getTopRatedMovies(),
  });
  return { topRatedTv: data };
};
