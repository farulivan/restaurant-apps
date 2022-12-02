import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Love from '../views/pages/love';
import Search from '../views/pages/search';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/favorite': Love,
  '/search': Search,
};

export default routes;
