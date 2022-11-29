import '../../../components/restaurant-list';

const Home = {
  async render() {
    return `
      <div class="content">
          <section class="restaurant">
              <h3 class="restaurant__label">Explore Restaurant</h3>
              <restaurant-list class="restaurant__list">
                
              </restaurant-list>
          </section>
      </div>
  `;
  },
};

export default Home;
