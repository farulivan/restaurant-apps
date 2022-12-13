import LoveButtonInitiator from '../src/scripts/utils/love-button-initiator';

describe('Love A Restaurant', () => {
  it('should show the love button when the restaurant has not been loved before', async () => {
    document.body.innerHTML = '<div id="loveButtonContainer"></div>';

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
    document.body.innerHTML = '<div id="loveButtonContainer"></div>';
    await LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlove this restaurant"]'))
      .toBeFalsy();
  });
});
