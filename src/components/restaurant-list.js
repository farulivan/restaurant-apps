import CONFIG from '../scripts/globals/config';
import RestaurantsSource from '../scripts/data/restaurants-source';
import FavoriteRestaurantIdb from '../scripts/data/favorite-restaurant-idb';
import './home-skeleton';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.page = this.getAttribute('page');
    this.isLoading = true;
    this.render();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
  }

  stopLoading() {
    this.isLoading = false;
  }

  async connectedCallback() {
    const allRestaurants = await RestaurantsSource.restaurantsList()
      .then(this.stopLoading());
    const favoriteRestaurants = await FavoriteRestaurantIdb.getAllRestaurants()
      .then(this.stopLoading());
    let restaurants = [];

    if (!this.isLoading) {
      if (this.page === 'home') {
        restaurants = allRestaurants;
      }
      if (this.page === 'love') {
        restaurants = favoriteRestaurants;
      }
      this.innerHTML = restaurants.map(
        ({
          id, name, pictureId, city, description, rating,
        }) => `
      <div class="restaurant__item" id=${id} onclick="location.href='/#/detail/${id}';">
      <div class="restaurant__image">
          <img src="${CONFIG.BASE_IMAGE_URL}small/${pictureId}" alt="picture of ${name}" />
      </div>
      <div class="restaurant__info">
          <p class="restaurant__name">${name}</p>
          <p class="restaurant__city">${city}</p>
          <p class="restaurant__description">${description}</p>
          <p class="restaurant__rating">⭐ <span>${rating}</span>/5</p>
      </div>
      </div>
      `,
      ).join('');
    }
  }

  render() {
    this.innerHTML = '<home-skeleton quantity="20"><home-skeleton>';
  }
}

customElements.define('restaurant-list', RestaurantList);
