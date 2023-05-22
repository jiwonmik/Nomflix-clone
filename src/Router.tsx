import { createHashRouter } from 'react-router-dom';
import Home from './Routes/Home';
import Tv from './Routes/Tv';
import Search from './Routes/Search';
import Header from './Components/Header';

const router = createHashRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'movies/:id',
        element: <Home />,
      },
      {
        path: 'tv',
        element: <Tv />,
        children: [
          {
            path: ':id',
            element: <Tv />,
          },
        ],
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);

export default router;
