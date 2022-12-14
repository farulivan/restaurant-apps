const assert = require('assert');

Feature('Adding new review to a restaurant');

Before(async ({ I }) => {
  I.amOnPage('/');
  I.usePuppeteerTo('disable cache', async ({ page }) => {
    await page.setCacheEnabled(false);
  });
});

Scenario('showing all restaurants', async ({ I }) => {
  I.see('Explore Restaurant', '.restaurant__label');
  I.seeElement('.restaurant__item');

  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  const resultRestaurant = locate('h3');
  const resultRestaurantName = await I.grabTextFrom(resultRestaurant);

  assert.strictEqual(firstRestaurantName, resultRestaurantName);

  const reviewerName = 'Kahfi';
  const reviewerReview = 'Selalu suka dengan kopinya';

  I.see('ADD YOUR REVIEW', 'h5');
  I.seeElement('.add-review-form');
  I.fillField('name', reviewerName);
  I.fillField('review', reviewerReview);
  I.click('Add Review');

  I.wait(5);
  const newReview = locate('.review').withText(reviewerReview);
  const newReviewName = locate('.review-name').withText(reviewerName);
  I.see(newReview);
  I.see(newReviewName);
});
