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
  // … kita akan mengisi uji coba berikutnya …
});
