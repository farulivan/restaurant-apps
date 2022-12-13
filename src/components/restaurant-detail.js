import UrlParser from '../scripts/routes/url-parser';
import RestaurantsSource from '../scripts/data/restaurants-source';
import LoveButtonPresenter from '../scripts/utils/love-button-presenter';

class RestaurantDetail extends HTMLElement {
  constructor() {
    super();
    this.restaurant = [];
    this.isLoading = true;
    this.isError = false;
    this.render();
  }

  stopLoading() {
    this.isLoading = false;
  }

  showError() {
    this.isError = true;
  }

  async connectedCallback() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantData = await RestaurantsSource.detailRestaurant(url.id)
      .then(this.stopLoading())
      .catch(() => {
        this.showError();
      });
    this.restaurant = restaurantData;

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

            <h3> Sorry.. There was an Error.. </h3>
          </div>
        `;
        return;
      }

      const {
        id,
        name,
        description,
        city,
        address,
        pictureId,
        categories,
        menus,
        rating,
        customerReviews,
      } = this.restaurant;

      this.innerHTML = `
        <div class="detail" id=${id}>
          <div class="detail__head">
            <img class="detail__image" src="https://restaurant-api.dicoding.dev/images/medium/${pictureId}" alt="">
            <div class="detail__content">
              <h3>${name}</h3>
              <div class="detail__rating" style="--rating: ${rating};" aria-label="Rating of this product is ${rating} out of 5.">
              </div>
            </div>
          </div>
          <div id="detailInfo" class="detail__info">
            <button class="back-button" onclick="window.location.href='/';">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
            </button>
            <div id="loveButtonContainer"></div>
            <div class="detail__subhead">
              <div class="detail__address">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <div class="address__container">
                  <h4 class="city">${city}</h4>
                  <p>${address}</p>
                </div>
              </div>  
              <div class="detail__category">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                  <path
                    fillRule="evenodd"
                    d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                ${categories.map((category) => `<p>${category.name}</p>`).join('')}
              </div>
            </div>
            <div class="detail__description">
              <h5>About</h5>
              <p>${description}</p>
            </div>
            <div class="detail__reviews">
              <h5>Reviews</h5>
              <div>
                ${customerReviews.map((review) => `
                  <div class="review-container">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
                        fill="#4A5568"
                      />
                    </svg>
                    <div>
                      <p class="review">" ${review.review} "</p>
                      <p class="review-name">by <span>${review.name}</span></p>
                      <p class="review-date">at ${review.date}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="detail__new-review">
              <h5>Add your review</h6>
              <p>What do you think about this resto?</p>
              <add-review restaurant-id=${id}></add-review>
            </div>
            <div class="detail__foods">
              <h5>Food Menu</h5>
              <div>
                ${menus.foods.map((food) => `
                    <ul>
                        <li>${food.name}</li>
                    </ul>
                `).join('')}
              </div>
            </div>
            <div class="detail__drinks">
              <h5>Drink Menu</h5>
              <div>
              ${menus.drinks.map((drink) => `
                    <ul>
                        <li>${drink.name}</li>
                    </ul>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;

      LoveButtonPresenter.init({
        loveButtonContainer: document.querySelector('#loveButtonContainer'),
        restaurant: {
          id: this.restaurant.id,
          name: this.restaurant.name,
          city: this.restaurant.city,
          description: this.restaurant.description,
          pictureId: this.restaurant.pictureId,
          rating: this.restaurant.rating,
        },
      });
    }
  }

  render() {
    this.innerHTML = '<list-skeleton quantity="1" page="detail"><list-skeleton>';
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
