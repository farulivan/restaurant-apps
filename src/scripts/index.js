import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
// import ".../styles/responsive.css";
import App from './views/app';
// import data from '../DATA.json';
// import WebSocketInitiator from './utils/websocket-initiator';
import swRegister from './utils/sw-register';
// import CONFIG from './globals/config';
import '../components/restaurant-list';
import '../components/restaurant-detail';
import '../components/list-skeleton';

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
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
