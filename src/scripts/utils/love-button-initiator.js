import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createLoveButtonTemplate, createLovedButtonTemplate } from '../views/templates/template-creator';

const LoveButtonInitiator = {
  async init({ loveButtonContainer, restaurant }) {
    this._loveButtonContainer = loveButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLoved();
    } else {
      this._renderLove();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLove() {
    this._loveButtonContainer.innerHTML = createLoveButtonTemplate();

    const loveButton = document.querySelector('#loveButton');
    loveButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLoved() {
    this._loveButtonContainer.innerHTML = createLovedButtonTemplate();

    const lovedButton = document.querySelector('#loveButton');
    lovedButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LoveButtonInitiator;
