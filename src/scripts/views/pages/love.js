const Love = {
  async render() {
    return `
    <div class="content">
        <section class="restaurant">
            <h3 class="restaurant__label">Your Favorite Resto</h3>
            <restaurant-list class="restaurant__list" page="love">
                
            </restaurant-list>
        </section>
    </div>
    `;
  },
};

export default Love;
