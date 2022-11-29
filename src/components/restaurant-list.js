import CONFIG from '../scripts/globals/config';
import RestaurantsSource from '../scripts/data/restaurants-source';
import './home-skeleton';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.isLoading = true;
    this.render();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  async connectedCallback() {
    const restaurants = await RestaurantsSource.restaurantsList().then(this.toggleLoading());
    if (!this.isLoading) {
      this.innerHTML = restaurants.map(
        ({
          id, name, pictureId, city, description, rating,
        }) => `
      <div class="restaurant__item" id=${id}>
      <div class="restaurant__image">
          <img src="${CONFIG.BASE_IMAGE_URL}small/${pictureId}" alt="picture of ${name}" />
      </div>
      <div class="restaurant__info">
          <p class="restaurant__name"><a href="/#/detail/${id}">${name}</a></p>
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
