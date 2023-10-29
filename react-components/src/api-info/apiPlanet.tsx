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
}
