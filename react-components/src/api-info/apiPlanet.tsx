import axios from 'axios';

export default class Planets {
  static async getAll() {
    try {
      const response = await axios.get('https://swapi.dev/api/planets/');
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }
  static async getSearchPlanet(endpoint: string) {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/planets/?search=${endpoint}`
      );
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }
}
