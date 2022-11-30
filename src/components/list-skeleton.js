class ListSkeleton extends HTMLElement {
  constructor() {
    super();
    this.quantity = this.getAttribute('quantity');
    this.render();
  }

  render() {
    this.innerHTML = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.quantity; i++) {
      this.innerHTML += `
        <div class="restaurant__item" id="${i}">
          <div class="restaurant__image">
            <img class="skeleton" alt="" />
          </div>
          <div class="restaurant__info">
            <div class="skeleton skeleton-text skeleton-text__title"></div>
            <div class="skeleton skeleton-text skeleton-text__subtitle"></div>
            <div class="skeleton skeleton-text skeleton-text"></div>
            <div class="skeleton skeleton-text skeleton-text"></div>
            <div class="skeleton skeleton-text skeleton-text"></div>
            <div class="skeleton skeleton-text skeleton-text"></div>
            <div class="skeleton skeleton-text skeleton-rating"></div>
          </div>
        </div>
      `;
    }
  }
}

customElements.define('list-skeleton', ListSkeleton);
