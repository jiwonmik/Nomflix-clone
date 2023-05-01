import { useTvShows } from '../hooks/useTvShows';
import { makeImagePath } from '../api/utils';
import { AnimatePresence } from 'framer-motion';
import { PathMatch, useMatch, useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Loader,
  Banner,
  Title,
  Overview,
  Overlay,
  Modal,
  ModalCover,
  ModalTitle,
  ModalOverview,
  Category,
  SliderWrapper,
} from '../Components/styles';
import Popular from '../Components/Tv/Popular';

function Tv() {
  const { data, isLoading } = useTvShows();

  const navigate = useNavigate();
  const tvPathMatch: PathMatch<string> | null = useMatch('/tv/:id');

  // const onBoxClicked = (tvId: number) => {
  //   navigate(`/tv/${tvId}`);
  // };
  const onOverlayClicked = () => {
    navigate('/tv');
  };

  const clickedTv =
    tvPathMatch?.params.id &&
    data?.results.find((tv) => tv.id.toString() === tvPathMatch.params.id);

  if (isLoading) return <h2>Loading...</h2>;

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
            <Category>Popular TV Shows</Category>
            <Popular data={data} />
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
