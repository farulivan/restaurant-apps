Feature('Loving Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('.restaurant__label');
  I.see('We don\'t find any restaurants in your favorite list', '.favorite-restaurant-not-found');
});

Scenario('loving one restaurant', ({ I }) => {
  I.see('We don\'t find any restaurants in your favorite list', '.favorite-restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant__item');
  I.click(locate('.restaurant__item').first());

  I.seeElement('#loveButton');
  I.click('#loveButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
});
