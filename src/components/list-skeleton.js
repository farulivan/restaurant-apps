class ListSkeleton extends HTMLElement {
  constructor() {
    super();
    this.quantity = this.getAttribute('quantity');
    this.page = this.getAttribute('page');
    this.render();
  }

  render() {
    if (this.page === 'home') {
      this.innerHTML = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.quantity; i++) {
        this.innerHTML += `
          <div class="restaurant__item" id="${i}">
            <div class="restaurant__image">
              <img class="skeleton" aria-label="loading the image" />
            </div>
            <div class="restaurant__info">
              <div aria-label="loading the title" class="skeleton skeleton-text skeleton-text__title"></div>
              <div aria-label="loading the subtitle" class="skeleton skeleton-text skeleton-text__subtitle"></div>
              <div aria-label="loading the text" class="skeleton skeleton-text skeleton-text"></div>
              <div aria-label="loading the text" class="skeleton skeleton-text skeleton-text"></div>
              <div aria-label="loading the text" class="skeleton skeleton-text skeleton-text"></div>
              <div aria-label="loading the text" class="skeleton skeleton-text skeleton-text"></div>
              <div aria-label="loading the rating" class="skeleton skeleton-text skeleton-rating"></div>
            </div>
          </div>
        `;
      }
    }

    if (this.page === 'detail') {
      this.innerHTML = '';
      this.innerHTML += `
      <div class="detail">
        <div class="detail__head">
          <img class="skeleton skeleton__image" aria-label="loading the image">
          <div class="detail__content">
            <div class="skeleton skeleton__name"></div>
            <div class="skeleton skeleton__rating"></div>
          </div>
        </div>
      <div id="detailInfo" class="detail__info">
        <button class="back-button" onclick="window.location.href='/';">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
        </button>
        <div class="detail__subhead">
          <div class="detail__address">
            <div class="skeleton skeleton__small-icon"></div>
            <div>
              <div class="skeleton skeleton__city"></div>
              <div class="skeleton skeleton__address"></div>
            </div>
          </div>  
          <div class="detail__category">
            <div class="skeleton skeleton__small-icon"></div>
            <div class="skeleton skeleton__categories"></div>
          </div>
        </div>
        <div class="detail__description">
          <div class="skeleton skeleton__about"></div>
          <div class="skeleton skeleton__description"></div>
          <div class="skeleton skeleton__description"></div>
          <div class="skeleton skeleton__description"></div>
          <div class="skeleton skeleton__description"></div>
          <div class="skeleton skeleton__description"></div>
        </div>
        <div class="detail__reviews">
          <div class="skeleton skeleton__reviews"></div>
          <div>
            <div class="review-container">
              <div class="skeleton skeleton__small-icon"></div>
              <div>
                <div class="skeleton skeleton__review"></div>
                <div class="skeleton skeleton__review-name"></div>
                <div class="skeleton skeleton__review-date"></div>
              </div>
            </div>
            <div class="review-container">
              <div class="skeleton skeleton__small-icon"></div>
              <div>
                <div class="skeleton skeleton__review"></div>
                <div class="skeleton skeleton__review-name"></div>
                <div class="skeleton skeleton__review-date"></div>
              </div>
            </div>
            <div class="review-container">
              <div class="skeleton skeleton__small-icon"></div>
              <div>
                <div class="skeleton skeleton__review"></div>
                <div class="skeleton skeleton__review-name"></div>
                <div class="skeleton skeleton__review-date"></div>
              </div>
            </div>
            <div class="review-container">
              <div class="skeleton skeleton__small-icon"></div>
              <div>
                <div class="skeleton skeleton__review"></div>
                <div class="skeleton skeleton__review-name"></div>
                <div class="skeleton skeleton__review-date"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail__foods">
          <div class="skeleton skeleton__food"></div>
          <div>
            <div class="skeleton skeleton__food-list"></div>
            <div class="skeleton skeleton__food-list"></div>
          </div>
        </div>
        <div class="detail__drinks">
          <div class="skeleton skeleton__drink"></div>
          <div>
            <div class="skeleton skeleton__drink-list"></div>
            <div class="skeleton skeleton__drink-list"></div>
          </div>
        </div>
      </div>
    </div>
  `;
    }
  }
}

customElements.define('list-skeleton', ListSkeleton);
