import { Category, RowContainer, SliderWrapper } from '../../styles';
import Slider from './Slider';
import { Props } from './types';

function Popular({ data }: Props) {
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
