import { useNowPlayingMovies, useTopRatedMovies, useUpcomingMovies } from '../hooks/useMovies';
import { makeImagePath } from '../api/utils';
import { AnimatePresence } from 'framer-motion';
import { PathMatch, useMatch, useNavigate } from 'react-router-dom';
import {
  Banner,
  Wrapper,
  SlidersWrapper,
  Loader,
  Title,
  Overview,
  Overlay,
  Modal,
  ModalCover,
  ModalTitle,
  ModalOverview,
  PlayBtn,
  InfoBtn,
  BtnWrapper,
} from '../styles';
import NowPlayingMovies from '../Components/Movie/NowPlayingMovies';
import TopRatedMovies from '../Components/Movie/TopRatedMovies';
import UpcomingMovies from '../Components/Movie/UpcomingMovies';

function Home() {
  const { data, isLoading } = useNowPlayingMovies();
  const { topRatedMovies } = useTopRatedMovies();
  const { upcomingMovie } = useUpcomingMovies();

  const allMovies = data && [...data.results, ...topRatedMovies.results, ...upcomingMovie.results];

  const navigate = useNavigate();
  const onOverlayClicked = () => {
    navigate('/');
  };

  const moviePathMatch: PathMatch<string> | null = useMatch('/movies/:id');
  const movieId = moviePathMatch?.params.id?.split('+')[1];

  const clickedMovie = movieId && allMovies?.find((movie) => movie.id.toString() === movieId);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
            <Title>{data?.results[0].original_title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
            <BtnWrapper>
              <PlayBtn> ▶︎ PLAY </PlayBtn>
              <InfoBtn> ⓘ INFO </InfoBtn>
            </BtnWrapper>
          </Banner>
          <SlidersWrapper>
            <NowPlayingMovies data={data} />
            <TopRatedMovies data={topRatedMovies} />
            <UpcomingMovies data={upcomingMovie} />
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
