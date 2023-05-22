import { Category, RowContainer, SliderWrapper } from '../../styles';
import Slider from './Slider';
import { TvProps } from './types';

function TopRated({ data }: TvProps) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Top Rated</Category>
        <Slider data={data} type="topRated" />
      </RowContainer>
    </SliderWrapper>
  );
}
export default TopRated;
