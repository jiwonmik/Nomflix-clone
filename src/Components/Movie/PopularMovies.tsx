import { usePopularMovies } from '../../hooks/useMovies';
import Slider from './Slider';
import { Category, Loader, RowContainer, SliderWrapper } from '../../styles';

function PopularMovies() {
  const { data, isLoading } = usePopularMovies();

  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Popular Movies</Category>
        {isLoading ? <Loader>Loading...</Loader> : <Slider data={data} type="popular" />}
      </RowContainer>
    </SliderWrapper>
  );
}
export default PopularMovies;
