import RestaurantsSource from '../scripts/data/restaurants-source';

class AddReview extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.isError = false;
    this.isOffline = false;
    this.reviewForm = document.querySelector('.add-review-form');
    this.offlineNote = document.querySelector('.user-offline');
    this.id = this.getAttribute('restaurant-id');
    this.name = '';
    this.review = '';
  }

  showError() {
    this.isError = true;
  }

  renderError() {
    this.innerHTML += `
      <div class="error-add-review">
        <p> Sorry.. There was an Error.. </p>
      </div>
    `;

    setTimeout(() => location.reload(), 3000);
  }

  renderOffline() {
    this.offlineNote.innerHTML = `
      <p>Youre offline. Please connect to the internet to write a review.</p>
    `;
    this.querySelector('button').setAttribute('disabled', '');
  }

  connectedCallback() {
    // Check if user online / offline
    if (navigator.onLine) {
      this.isOffline = false;
    } else {
      this.isOffline = true;
      this.renderOffline();
    }

    // Listen when user back online
    window.addEventListener('online', () => this.render());

    this.reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      this.name = event.currentTarget.name.value;
      this.review = event.currentTarget.review.value;
      await RestaurantsSource.addNewReview({
        id: this.id,
        name: this.name,
        review: this.review,
      })
        .then(() => location.reload())
        .catch(() => {
          this.renderError();
        });
    });
  }

  render() {
    this.innerHTML = `
      <form class="add-review-form">
        <div class="user-offline"></div>
        <div class="add-review-container">
          <label for="name">Your name</label>
          <input id="name" type="text" name="name" placeholder="Anto" required />
        </div>
        <div class="add-review-container">
          <label for="review">Your review</label>
          <textarea id="review" name="review" placeholder='Example: Amazing Restaurant!' required ></textarea>
        </div>
        <button class="add-review-button" type="submit">Add Review</button>
      </form>
    `;
  }
}

customElements.define('add-review', AddReview);
