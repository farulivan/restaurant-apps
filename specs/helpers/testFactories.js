import LoveButtonPresenter from '../../src/scripts/utils/love-button-presenter';

const createLoveButtonPresenterWithRestaurant = async (restaurant) => {
  await LoveButtonPresenter.init({
    loveButtonContainer: document.querySelector('#loveButtonContainer'),
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLoveButtonPresenterWithRestaurant };
