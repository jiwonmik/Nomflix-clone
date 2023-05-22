import Slider from './Slider';
import { Category, RowContainer, SliderWrapper } from '../../styles';
import { MovieProps } from './types';

function NowPlayingMovies({ data }: MovieProps) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Now Playing Movies</Category>
        <Slider data={data} type="latest" />
      </RowContainer>
    </SliderWrapper>
  );
}
export default NowPlayingMovies;
