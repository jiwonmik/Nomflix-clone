import styled from 'styled-components';
import { useMovies } from '../hooks/movie';
import { makeImgaePath } from '../api/utils';
import { motion } from 'framer-motion';

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
  width: 100%;
  height: 400px;
  background-color: antiquewhite;
`;
const Row = styled(motion.div)``;
const Box = styled(motion.div)``;

function Home() {
  const { data, isLoading } = useMovies();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImgaePath(data![0].backdrop_path)}>
            <Title>{data![0].original_title}</Title>
            <Overview>{data![0].overview}</Overview>
          </Banner>
          <Slider>
            <Row></Row>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
