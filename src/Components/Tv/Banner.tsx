import { BannerWrapper, Title, Overview, PlayBtn, InfoBtn, BtnWrapper } from '../../styles';
import { makeImagePath } from '../../api/utils';
import { TvProps } from './types';

function Banner({ data }: TvProps) {
  return (
    <BannerWrapper bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
      <Title>{data?.results[0].original_name}</Title>
      <Overview>{data?.results[0].overview}</Overview>
      <BtnWrapper>
        <PlayBtn> ▶︎ PLAY </PlayBtn>
        <InfoBtn> ⓘ INFO </InfoBtn>
      </BtnWrapper>
    </BannerWrapper>
  );
}

export default Banner;
