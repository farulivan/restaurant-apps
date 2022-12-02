const Home = {
  async render() {
    return `
      <div class="content">
          <search-bar></search-bar>
          <section class="restaurant">
              <h3 class="restaurant__label">Explore Restaurant</h3>
              <restaurant-list class="restaurant__list" page="home">
                
              </restaurant-list>
          </section>
      </div>
  `;
  },
};

export default Home;
