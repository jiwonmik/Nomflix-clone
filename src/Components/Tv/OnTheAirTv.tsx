import { Category, RowContainer, SliderWrapper } from '../../styles';
import Slider from './Slider';
import { Props } from './types';

function OnTheAirTv({ data }: Props) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>On the Air</Category>
        <Slider data={data} type="onTheAir" />
      </RowContainer>
    </SliderWrapper>
  );
}
export default OnTheAirTv;
