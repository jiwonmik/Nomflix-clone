import { createBrowserRouter } from 'react-router-dom';
import Home from './Routes/Home';
import Tv from './Routes/Tv';
import Search from './Routes/Search';
import Header from './Components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'tv',
        element: <Tv />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);

export default router;
