import { Category, RowContainer, SliderWrapper } from '../../styles';
import Slider from './Slider';
import { TvProps } from './types';

function AiringToday({ data }: TvProps) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Airing Today</Category>
        <Slider data={data} type="airing" />
      </RowContainer>
    </SliderWrapper>
  );
}
export default AiringToday;
