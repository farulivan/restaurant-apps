// import RestaurantsSource from "../scripts/data/restaurants-source";

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.searchForm = document.getElementById('search-form');
  }

  connectedCallback() {
    this.searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      location.href = `/#/search?q=${event.currentTarget.search.value}`;
    });
  }

  render() {
    this.innerHTML = `
      <div class="search-box">
        <form id="search-form" role="search">
          <label for="search">Search for restaurants</label>
          <input id="search" type="search" placeholder="Search..." autofocus required />
          <button type="submit">Go</button>    
        </form>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
