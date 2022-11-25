import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Love = {
  async render() {
    return `
    <div class="content">
        <section class="restaurant">
            <h3 class="restaurant__label">Your Favorite Resto</h3>
            <div class="restaurant__list">
            
            </div>
        </section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.restaurant__list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
          += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Love;
