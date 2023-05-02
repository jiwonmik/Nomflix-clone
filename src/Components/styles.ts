import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  width: 100%;
  height: 200vh;
  position: absolute;
  top: 40px;
  z-index: -1;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.div<{ bgPhoto: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 45px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  color: white;
`;

export const Category = styled.h2`
  font-size: 26px;
  padding: 20px;
  color: ${(props) => props.theme.white.darker};
`;

export const SliderWrapper = styled.div`
  position: relative;
  top: -150px;
`;

export const Slider = styled.div``;

export const SliderLeftBtn = styled(motion.button)`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: black;
  position: absolute;
  top: 70px;
  opacity: 0;
  cursor: pointer;
`;

export const SliderRightBtn = styled(motion.button)`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: black;
  position: absolute;
  top: 70px;
  right: 0px;
  opacity: 0;
  cursor: pointer;
`;

export const RowContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  :hover {
    * {
      opacity: 1;
      transition: 1s;
    }
  }
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
  position: absolute;
`;
export const Box = styled(motion.div)`
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  cursor: pointer;
`;

export const Info = styled(motion.div)`
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

export const Image = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 20;
  margin-bottom: 20px;
`;

export const Overview = styled.h2`
  font-size: 20px;
  width: 50%;
`;

export const Modal = styled(motion.div)<{ bgPhoto?: string }>`
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

export const ModalCover = styled.div`
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 400px;
`;

export const ModalTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  font-size: 36px;
  padding: 20px;
  position: relative;
  top: -60px;
`;

export const ModalOverview = styled.p`
  font-size: 20px;
  padding: 20px;
  position: relative;
  top: -60px;
  color: ${(props) => props.theme.white.darker};
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const rowVariants = {
  hidden: {
    x: window.outerWidth + 20,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 20,
  },
};

export const infoVariants = {
  hover: {
    opacity: 1,
  },
};

export const boxVariants = {
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

export const buttonVariants = {
  hover: {
    opacity: 0.5,
  },
};
