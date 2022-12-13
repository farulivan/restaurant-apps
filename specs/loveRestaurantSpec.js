import LoveButtonInitiator from '../src/scripts/utils/love-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Love A Restaurant', () => {
  const addLoveButtonContainer = () => {
    document.body.innerHTML = '<div id="loveButtonContainer"></div>';
  };

  beforeEach(() => {
    addLoveButtonContainer();
  });

  it('should show the love button when the restaurant has not been loved before', async () => {
    await LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="love this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlove button when the restaurant has not been loved before', async () => {
    await LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlove this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to love the restaurant', async () => {
    await LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#loveButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already loved', async () => {
    await LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#loveButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurant: {},
    });

    document.querySelector('#loveButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
