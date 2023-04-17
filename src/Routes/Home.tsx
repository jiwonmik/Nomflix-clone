import styled from 'styled-components';
import { useMovies } from '../hooks/useMovies';
import { makeImagePath } from '../api/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { PathMatch, useMatch, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 200vh;
  position: absolute;
  top: 40px;
  z-index: -1;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  color: white;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 20;
  margin-bottom: 20px;
`;

const Overview = styled.h2`
  font-size: 20px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
  position: absolute;
`;

const Box = styled(motion.div)`
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  cursor: pointer;
`;

const Image = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

const Info = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: relative;
  width: 100%;
  bottom: 10px;
  h4 {
    text-align: center;
    color: white;
  }
`;

const Modal = styled(motion.div)<{ bgPhoto?: string }>`
  width: 40vw;
  height: 80vh;
  background-color: ${(props) => props.theme.black.lighter};
  background-size: cover;
  position: fixed;
  top: 80px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
`;

const ModalCover = styled.div`
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 400px;
`;

const ModalTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  font-size: 36px;
  padding: 20px;
  position: relative;
  top: -60px;
`;

const ModalOverview = styled.p`
  font-size: 20px;
  padding: 20px;
  position: relative;
  top: -60px;
  color: ${(props) => props.theme.white.darker};
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 170,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 170,
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.3,
      type: 'tween',
    },
  },
};

function Home() {
  const { data, isLoading } = useMovies();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const navigate = useNavigate();
  const moviePathMatch: PathMatch<string> | null = useMatch('/movies/:id');

  const offset = 6;

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };
  const onOverlayClicked = () => {
    navigate('/');
  };

  const clickedMovie =
    moviePathMatch?.params.id &&
    data?.results.find((movie) => movie.id.toString() === moviePathMatch.params.id);

  console.log(clickedMovie);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}
          >
            <Title>{data?.results[0].original_title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1.5 }}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      layoutId={movie.id.toString()}
                      variants={boxVariants}
                      transition={{ type: 'tween' }}
                      whileHover="hover"
                      initial="normal"
                      onClick={() => onBoxClicked(movie.id)}
                    >
                      <Image bgPhoto={makeImagePath(movie.poster_path, 'w500')} />
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
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
