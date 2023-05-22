import { useSearchParams } from 'react-router-dom';
import { Wrapper, SliderWrapper, RowContainer, Category, SlidersWrapper } from '../styles';
import { useSearchMovies } from '../hooks/useMovies';
import MovieSlider from '../Components/Movie/Slider';
import TvSlider from '../Components/Tv/Slider';
import { useSearchTvShows } from '../hooks/useTvShows';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('keyword') || '';

  const { searchMovies } = useSearchMovies({ query: query });
  const { searchTvShows } = useSearchTvShows({ query: query });

  return (
    <Wrapper style={{ marginTop: '70px' }}>
      <SlidersWrapper>
        <Category>&quot;{query}&quot; search result</Category>
        <SliderWrapper>
          <RowContainer>
            <Category>Movies</Category>
            <MovieSlider data={searchMovies} type="searchMovies" />
          </RowContainer>
        </SliderWrapper>
        <SliderWrapper>
          <RowContainer>
            <Category>Tv Shows</Category>
            <TvSlider data={searchTvShows} type="searchMovies" />
          </RowContainer>
        </SliderWrapper>
      </SlidersWrapper>
    </Wrapper>
  );
}
export default Search;
