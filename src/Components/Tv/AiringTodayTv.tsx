import { Category, RowContainer, SliderWrapper } from '../../styles';
import Slider from './Slider';
import { Props } from './types';

function AiringToday({ data }: Props) {
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
