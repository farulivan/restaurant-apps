import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import '../components/restaurant-list';
import '../components/restaurant-detail';
import '../components/list-skeleton';
import '../components/search-bar';
import '../components/restaurant-search';
import '../components/add-review';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

// -- Service Workers -- //

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
