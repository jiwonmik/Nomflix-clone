import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { makeImagePath } from '../../api/utils';
import {
  Category,
  Slider,
  Row,
  Box,
  Image,
  Info,
  rowVariants,
  boxVariants,
  infoVariants,
  SliderButton,
  RowContainer,
} from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { IGetMoviesResult } from '../../api/movies';

interface Props {
  data?: IGetMoviesResult;
}

function NowPlaying({ data }: Props) {
  const [leaving, setLeaving] = useState(false);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();
  const offset = 6;

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  return (
    <>
      <RowContainer>
        <SliderButton onClick={decreaseIndex}>
          <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#ffffff' }} />
        </SliderButton>
        <Category>Now Playing Movies</Category>
        <SliderButton onClick={increaseIndex}>
          <FontAwesomeIcon icon={faAngleRight} style={{ color: '#ffffff' }} />
        </SliderButton>
      </RowContainer>
      <Slider>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <Row
            key={index}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            exit="exit"
            transition={{ Category: 'tween', duration: 1.5 }}
          >
            {data?.results
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((movie) => (
                <Box
                  key={movie.id}
                  layoutId={movie.id.toString()}
                  variants={boxVariants}
                  transition={{ Category: 'tween' }}
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
    </>
  );
}
export default NowPlaying;
