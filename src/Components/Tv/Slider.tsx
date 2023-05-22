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
  const onBoxClicked = (tvId: number) => {
    navigate(`/tv/${type}+${tvId}`);
  };

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setBack(false);
      const totalTv = data.results.length - 1;
      const maxIndex = Math.floor(totalTv / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setBack(true);
      const totalTv = data.results.length - 1;
      const maxIndex = Math.floor(totalTv / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  return (
    <AnimatePresence custom={[back, leaving]} initial={false} onExitComplete={toggleLeaving}>
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
          .map((tvShow) => (
            <Box
              key={tvShow.id}
              layoutId={type + '+' + tvShow.id.toString()}
              variants={boxVariants}
              transition={{ Category: 'tween' }}
              whileHover="hover"
              initial="normal"
              onClick={() => onBoxClicked(tvShow.id)}
            >
              <Image bgPhoto={makeImagePath(tvShow.poster_path, 'w500')} />
              <Info variants={infoVariants}>
                <h4>{tvShow.name}</h4>
              </Info>
            </Box>
          ))}
        <SliderLeftBtn
          className="slider-btn"
          onClick={decreaseIndex}
          custom={leaving}
          variants={buttonVariants}
        >
          <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#ffffff' }} size="2x" />
        </SliderLeftBtn>
        <SliderRightBtn
          className="slider-btn"
          onClick={increaseIndex}
          custom={leaving}
          variants={buttonVariants}
        >
          <FontAwesomeIcon icon={faAngleRight} style={{ color: '#ffffff' }} size="2x" />
        </SliderRightBtn>
      </Row>
    </AnimatePresence>
  );
}
export default Slider;
