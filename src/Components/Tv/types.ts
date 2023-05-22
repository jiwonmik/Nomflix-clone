import { IGetTvShowsResult } from '../../api/shows';

export interface Props {
  data?: IGetTvShowsResult;
}

export interface SliderProps {
  data?: IGetTvShowsResult;
  type: string;
}
