import { useUpcomingMovies } from '../../hooks/useMovies';
import Slider from './Slider';
import { Category, Loader, RowContainer, SliderWrapper } from '../styles';

function UpcomingMovies() {
  const { data, isLoading } = useUpcomingMovies();

  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Upcoming Movies</Category>
        {isLoading ? <Loader>Loading...</Loader> : <Slider data={data} type="upcoming" />}
      </RowContainer>
    </SliderWrapper>
  );
}
export default UpcomingMovies;
