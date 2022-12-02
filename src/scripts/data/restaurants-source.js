import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async restaurantsList() {
    try {
      const response = await axios.get(API_ENDPOINT.LIST);
      return response.data.restaurants;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAIL(id));
      return response.data.restaurant;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  static async searchRestaurants(query) {
    try {
      const response = await axios.get(API_ENDPOINT.SEARCH(query));
      return response.data.restaurants;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}

export default RestaurantsSource;
