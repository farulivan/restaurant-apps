import RestaurantsSource from "../../data/restaurants-source"
import { createRestaurantItemTemplate } from "../templates/template-creator"

const Home = {
    async render() {
        return `
            <div class="content">
                <section class="restaurant">
                    <h3 class="restaurant__label">Explore Restaurant</h3>
                    <div class="restaurant__list"></div>
                </section>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantsSource.restaurantsList();
        const restaurantsContainer = document.querySelector('.restaurant__list');

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
        })
    }
}

export default Home;