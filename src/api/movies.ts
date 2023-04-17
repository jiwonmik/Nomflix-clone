const BASE_PATH = 'https://api.themoviedb.org/3/';
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const getNowPlayingMovies = async () => {
  const { results } = await (
    await fetch(`${BASE_PATH}/movie/now_playing?api_key=${VITE_API_KEY}`)
  ).json();
  console.log('now playing movies fetched');
  return results;
};
