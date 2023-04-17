import styled from 'styled-components';
import { useMovies } from '../hooks/useMovies';
import { makeImgaePath } from '../api/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled.div`
  background: whitesmoke;
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
  top: -200px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
  position: absolute;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
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
  const offset = 6;

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner onClick={increaseIndex} bgPhoto={makeImgaePath(data![0].backdrop_path)}>
            <Title>{data![0].original_title}</Title>
            <Overview>{data![0].overview}</Overview>
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
                {data!
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      bgPhoto={makeImgaePath(movie.poster_path, 'w500')}
                      variants={boxVariants}
                      transition={{ type: 'tween' }}
                      whileHover="hover"
                      initial="normal"
                    />
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
