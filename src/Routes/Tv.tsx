import {
  useAiringTodayTvShows,
  useOnTheAirTvShows,
  usePopularTvShows,
  useTopRatedTvShows,
} from '../hooks/useTvShows';
import { makeImagePath } from '../api/utils';
import { AnimatePresence } from 'framer-motion';
import { PathMatch, useMatch, useNavigate } from 'react-router-dom';
import {
  Banner,
  Wrapper,
  Loader,
  Title,
  Overview,
  Overlay,
  Modal,
  ModalCover,
  ModalTitle,
  ModalOverview,
  SliderWrapper,
} from '../styles';
import Popular from '../Components/Tv/PopularTv';
import AiringToday from '../Components/Tv/AiringTodayTv';
import OnTheAirTv from '../Components/Tv/OnTheAirTv';
import TopRated from '../Components/Tv/TopRatedTv';

function Tv() {
  const { data, isLoading } = useAiringTodayTvShows();
  const { onTheAirTv } = useOnTheAirTvShows();
  const { popularTv } = usePopularTvShows();
  const { topRatedTv } = useTopRatedTvShows();

  const navigate = useNavigate();
  const onOverlayClicked = () => {
    navigate('/tv');
  };

  const tvPathMatch: PathMatch<string> | null = useMatch('/tv/:id');
  const tvId = tvPathMatch?.params.id?.split('+')[1];

  const clickedTv = tvId && data?.results?.find((tv) => tv.id.toString() === tvId);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
            <Title>{data?.results[0].name}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <SliderWrapper>
            <AiringToday data={data} />
            <Popular data={popularTv} />
            <OnTheAirTv data={onTheAirTv} />
            <TopRated data={topRatedTv} />
          </SliderWrapper>
          <AnimatePresence>
            {tvPathMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClicked}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <Modal layoutId={tvPathMatch.params.id}>
                  {clickedTv && (
                    <>
                      <ModalCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black,transparent), url(${makeImagePath(
                            clickedTv.backdrop_path,
                            'w500'
                          )})`,
                        }}
                      />
                      <ModalTitle>{clickedTv.name}</ModalTitle>
                      <ModalOverview>{clickedTv.overview}</ModalOverview>
                    </>
                  )}
                </Modal>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}
export default Tv;
