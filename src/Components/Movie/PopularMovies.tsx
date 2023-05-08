import Slider from './Slider';
import { Category, RowContainer, SliderWrapper } from '../../styles';
import { MovieProps } from './types';

function PopularMovies({ data }: MovieProps) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Popular Movies</Category>
        <Slider data={data} type="popular" />
      </RowContainer>
    </SliderWrapper>
  );
}
export default PopularMovies;
