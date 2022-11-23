import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
// import ".../styles/responsive.css";
import App from "./views/app";
import data from "../DATA.json";
// import WebSocketInitiator from './utils/websocket-initiator';
import swRegister from "./utils/sw-register";
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
})

// // -- Render Cards -- //
// const restaurantListElement = document.querySelector(".restaurant__list");
// const { restaurants } = data;
// restaurantListElement.restaurants = restaurants;
// restaurantListElement.innerHTML = restaurants
//   .map(({ id, name, description, pictureId, city, rating }) => {
//     return `
//     <div class="restaurant__item" id=${id}>
//     <div class="restaurant__image">
//       <img src=${pictureId} alt="picture of ${name}" />
//     </div>
//     <div class="restaurant__info">
//       <p class="restaurant__name">${name}</p>
//       <p class="restaurant__city">${city}</p>
//       <p class="restaurant__description">${description}</p>
//       <p class="restaurant__rating">⭐ <span>${rating}</span>/5</p>
//     </div>
//   </div>
//     `;
//   })
//   .join("");

// // -- Hamburger Nav -- //
// const menu = document.querySelector(".menu");
// const main = document.querySelector("main");
// const nav = document.querySelector(".nav");

// menu.addEventListener("click", function (event) {
//   nav.classList.toggle("open");
//   event.stopPropagation();
// });

// main.addEventListener("click", function () {
//   nav.classList.remove("open");
// });

// -- Service Workers -- //

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
