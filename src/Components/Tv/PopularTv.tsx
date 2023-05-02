import { Category, RowContainer, SliderWrapper } from '../styles';
import Slider from './Slider';
import { IGetTvShowsResult } from '../../api/shows';

interface Props {
  data?: IGetTvShowsResult;
}

function Popular({ data }: Props) {
  return (
    <SliderWrapper>
      <RowContainer>
        <Category>Popular TV Shows</Category>
        <Slider data={data} type="popular" />
      </RowContainer>
    </SliderWrapper>
  );
}
export default Popular;
