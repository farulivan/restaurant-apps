import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
// import Upcoming from '../views/pages/upcoming';
// import Like from '../views/pages/like';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
//   '/now-playing': Home,
//   '/upcoming': Upcoming,
//   '/like': Like,
};

export default routes;
