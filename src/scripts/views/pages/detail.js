import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

// import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    const mainContent = document.querySelector('#mainContent');
    mainContent.innerHTML = createRestaurantDetailTemplate(restaurant);

    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   movie: {
    //     id: movie.id,
    //     title: movie.title,
    //     overview: movie.overview,
    //     backdrop_path: movie.backdrop_path,
    //     vote_average: movie.vote_average,
    //   },
    // });
  },
};

export default Detail;
