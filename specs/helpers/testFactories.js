import LoveButtonPresenter from '../../src/scripts/utils/love-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLoveButtonPresenterWithRestaurant = async (restaurant) => {
  await LoveButtonPresenter.init({
    loveButtonContainer: document.querySelector('#loveButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLoveButtonPresenterWithRestaurant };
