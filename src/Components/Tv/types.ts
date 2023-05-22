import { IGetTvShowsResult } from '../../api/shows';

export interface TvProps {
  data?: IGetTvShowsResult;
}

export interface SliderProps {
  data?: IGetTvShowsResult;
  type: string;
}
