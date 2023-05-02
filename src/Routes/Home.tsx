import { useNowPlayingMovies } from '../hooks/useMovies';
import { makeImagePath } from '../api/utils';
import { AnimatePresence } from 'framer-motion';
import { PathMatch, useMatch, useNavigate } from 'react-router-dom';
import NowPlaying from '../Components/Movie/NowPlayingMovie';
import {
  SlidersWrapper,
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
} from '../Components/styles';
import PopularMovies from '../Components/Movie/PopularMovies';

function Home() {
  const { data, isLoading } = useNowPlayingMovies();
  const navigate = useNavigate();

  const moviePathMatch: PathMatch<string> | null = useMatch('/movies/:id');

  const onOverlayClicked = () => {
    navigate('/');
  };

  const clickedMovie =
    moviePathMatch?.params.id &&
    data?.results.find((movie) => movie.id.toString() === moviePathMatch.params.id);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
            <Title>{data?.results[0].original_title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <SlidersWrapper>
            <NowPlaying data={data} />
            <PopularMovies />
          </SlidersWrapper>
          <AnimatePresence>
            {moviePathMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClicked}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <Modal layoutId={moviePathMatch.params.id}>
                  {clickedMovie && (
                    <>
                      <ModalCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black,transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            'w500'
                          )})`,
                        }}
                      />
                      <ModalTitle>{clickedMovie.title}</ModalTitle>
                      <ModalOverview>{clickedMovie.overview}</ModalOverview>
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
export default Home;
