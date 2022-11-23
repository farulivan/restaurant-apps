import API_ENDPOINT from '../globals/api-endpoint';
import axios from 'axios';

class RestaurantsSource {
  static async restaurantsList() {
    try {
      const response = await axios.get(API_ENDPOINT.LIST);
      return response.data.restaurants
    } catch (error) {
      console.error(error)
    }
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async searchRestaurants() {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.results;
  }

}

export default RestaurantsSource;
