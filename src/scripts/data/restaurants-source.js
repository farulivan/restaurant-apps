import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async restaurantsList() {
    try {
      const response = await axios.get(API_ENDPOINT.LIST);
      return response.data.restaurants;
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAIL(id));
      console.log(response.data)
      return response.data.restaurant;
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  static async searchRestaurants(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.results;
  }
}

export default RestaurantsSource;
