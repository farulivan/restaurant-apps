import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import LoveButtonInitiator from '../../utils/love-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="loveButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    const mainContent = document.querySelector('#restaurant');
    mainContent.innerHTML = createRestaurantDetailTemplate(restaurant);

    LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
