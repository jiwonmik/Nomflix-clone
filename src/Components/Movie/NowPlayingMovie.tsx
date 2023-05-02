import { IGetMoviesResult } from '../../api/movies';
import Slider from './Slider';
import { Category, RowContainer, SliderWrapper } from '../../styles';

export interface Props {
  data?: IGetMoviesResult;
}

function NowPlayingMovies({ data }: Props) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Now Playing Movies</Category>
        <Slider data={data} />
      </RowContainer>
    </SliderWrapper>
  );
}
export default NowPlayingMovies;
