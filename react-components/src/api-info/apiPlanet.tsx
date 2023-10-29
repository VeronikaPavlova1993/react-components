import axios from 'axios';

export default class Planets {
  static async getAll() {
    try {
      const response = await axios.get('https://swapi.dev/api/planets/');
      console.log(response.data.results);
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }
}
