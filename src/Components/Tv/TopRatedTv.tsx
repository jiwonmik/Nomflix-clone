import { Category, RowContainer, SliderWrapper } from '../../styles';
import Slider from './Slider';
import { Props } from './types';

function TopRated({ data }: Props) {
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
