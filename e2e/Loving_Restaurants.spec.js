const assert = require('assert');

Feature('Loving Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('.restaurant__label');
  I.see('We don\'t find any restaurants in your favorite list', '.favorite-restaurant-not-found');
});

Scenario('love one restaurant', async ({ I }) => {
  I.see('We don\'t find any restaurants in your favorite list', '.favorite-restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant__item');

  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#loveButton');
  I.seeElement('.love-this-restaurant');
  I.click('#loveButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const lovedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, lovedRestaurantName);
});

Scenario('unlove one restaurant', async ({ I }) => {
  // Start with Love one restaurant
  I.see('We don\'t find any restaurants in your favorite list', '.favorite-restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant__item');

  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#loveButton');
  I.seeElement('.love-this-restaurant');
  I.click('#loveButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const lovedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, lovedRestaurantName);

  // Continue to unlove the following restaurant
  I.click(firstRestaurant);

  I.seeElement('#loveButton');
  I.seeElement('.unlove-this-restaurant');
  I.click('#loveButton');

  // Check favorite page, make sure no restaurant shown
  I.amOnPage('/#/favorite');
  I.see('We don\'t find any restaurants in your favorite list', '.favorite-restaurant-not-found');
});
