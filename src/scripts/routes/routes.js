import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Love from '../views/pages/love';
// import Upcoming from '../views/pages/upcoming';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/favorite': Love,
//   '/now-playing': Home,
//   '/upcoming': Upcoming,
};

export default routes;
