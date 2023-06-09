import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Row,
  Box,
  Image,
  Info,
  rowVariants,
  boxVariants,
  infoVariants,
  buttonVariants,
  SliderLeftBtn,
  SliderRightBtn,
} from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import { makeImagePath } from '../../api/utils';
import { SliderProps } from './types';

function Slider({ data, type }: SliderProps) {
  const [leaving, setLeaving] = useState(false);
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);

  const navigate = useNavigate();
  const offset = 6;

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${type}+${movieId}`);
  };

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setBack(false);
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setBack(true);
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  return (
    <AnimatePresence custom={back} initial={false} onExitComplete={toggleLeaving}>
      <Row
        custom={back}
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
              layoutId={type + '+' + movie.id.toString()}
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
        <SliderLeftBtn className="slider-btn" onClick={decreaseIndex} variants={buttonVariants}>
          <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#ffffff' }} size="2x" />
        </SliderLeftBtn>
        <SliderRightBtn className="slider-btn" onClick={increaseIndex} variants={buttonVariants}>
          <FontAwesomeIcon icon={faAngleRight} style={{ color: '#ffffff' }} size="2x" />
        </SliderRightBtn>
      </Row>
    </AnimatePresence>
  );
}
export default Slider;
