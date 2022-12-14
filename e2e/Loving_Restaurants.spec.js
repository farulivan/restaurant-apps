const assert = require('assert');

Feature('Loving Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('.restaurant__label');
  I.see('We don\'t find any restaurants in your favorite list', '.favorite-restaurant-not-found');
});

Scenario('loving one restaurant', async ({ I }) => {
  I.see('We don\'t find any restaurants in your favorite list', '.favorite-restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant__item');

  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#loveButton');
  I.click('#loveButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const lovedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, lovedRestaurantName);
});
