import { IGetMoviesResult } from '../../api/movies';

export interface MovieProps {
  data?: IGetMoviesResult;
}

export interface SliderProps {
  data?: IGetMoviesResult;
  type: string;
}
