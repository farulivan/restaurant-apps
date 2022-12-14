import RestaurantsSource from '../scripts/data/restaurants-source';
import CONFIG from '../scripts/globals/config';

class RestaurantSearch extends HTMLElement {
  constructor() {
    super();
    this.restaurants = [];
    this.isLoading = true;
    this.isError = false;

    const _query = document.location.hash.split('=')[1];
    this.query = _query;

    this.render();
  }

  stopLoading() {
    this.isLoading = false;
  }

  showError() {
    this.isError = true;
  }

  async connectedCallback() {
    const searchResult = await RestaurantsSource.searchRestaurants(this.query)
      .then(this.stopLoading())
      .catch(() => {
        this.showError();
      });
    this.restaurants = searchResult;

    if (!this.isLoading) {
      if (this.isError) {
        this.innerHTML = `
          <div class="error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>

            <h3>Sorry.. There was an Error..</h3>
          </div>
        `;
        return;
      }

      if (this.restaurants.length === 0) {
        this.innerHTML = `
          <div class="keyword-not-found not__found">
            <p class="title">We don't find any restaurants that match your keyword</p>
            <p class="subtitle">Please try to use another keyword or find the restaurant in our Home page</p>
          </div>
        `;
        return;
      }

      this.innerHTML = this.restaurants.map(
        ({
          id, name, pictureId, city, description, rating,
        }) => `
          <a class="restaurant__item" id=${id} href="/#/detail/${id}">
            <div class="restaurant__image">
                <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}small/${pictureId}" alt="picture of ${name}" />
            </div>
            <div class="restaurant__info">
                <p class="restaurant__name">${name}</p>
                <p class="restaurant__city">${city}</p>
                <p class="restaurant__description">${description}</p>
                <p class="restaurant__rating">??? <span>${rating}</span>/5</p>
            </div>
          </a>
        `,
      ).join('');
    }
  }

  render() {
    this.innerHTML = `
      <list-skeleton quantity="20" page="home"><list-skeleton>
    `;
  }
}

customElements.define('restaurant-search', RestaurantSearch);
