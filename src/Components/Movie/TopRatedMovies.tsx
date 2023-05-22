import Slider from './Slider';
import { Category, RowContainer, SliderWrapper } from '../../styles';
import { MovieProps } from './types';

function TopRatedMovies({ data }: MovieProps) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Top Rated Movies</Category>
        <Slider data={data} type="topRated" />
      </RowContainer>
    </SliderWrapper>
  );
}
export default TopRatedMovies;
