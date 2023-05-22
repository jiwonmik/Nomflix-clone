import { Category, RowContainer, SliderWrapper } from '../../styles';
import Slider from './Slider';
import { TvProps } from './types';

function OnTheAirTv({ data }: TvProps) {
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
