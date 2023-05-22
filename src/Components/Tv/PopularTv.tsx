import { Category, RowContainer, SliderWrapper } from '../../styles';
import Slider from './Slider';
import { TvProps } from './types';

function Popular({ data }: TvProps) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Popular</Category>
        <Slider data={data} type="popular" />
      </RowContainer>
    </SliderWrapper>
  );
}
export default Popular;
