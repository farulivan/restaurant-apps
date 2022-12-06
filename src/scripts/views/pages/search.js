const Search = {
  async render() {
    return `
      <div class="content">
          <search-bar></search-bar>
          <section class="restaurant">
              <h3 class="restaurant__label">Result</h3>
              <restaurant-search class="restaurant__search-result" page="home">
                
              </restaurant-search>
          </section>
      </div>
    `;
  },
};

export default Search;
