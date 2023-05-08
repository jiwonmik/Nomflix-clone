import Slider from './Slider';
import { Category, RowContainer, SliderWrapper } from '../../styles';
import { MovieProps } from './types';

function UpcomingMovies({ data }: MovieProps) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Upcoming Movies</Category>
        <Slider data={data} type="upcoming" />
      </RowContainer>
    </SliderWrapper>
  );
}
export default UpcomingMovies;
