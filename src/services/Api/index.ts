export const Api = {
  _API_URL: process.env.REACT_APP_API_URL,
  _API_KEY: process.env.REACT_APP_API_KEY,

  async getCharacters(limit = 10, offset = 0): Promise<any> {
    try {
      const response = await fetch(
        `${this._API_URL}characters?limit=${limit}&offset=${offset}&apikey=${this._API_KEY}`
      );
      const result = await response.json();

      if (response.ok) {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      return [];
    }
  },
  async getCharacter(name: string, limit = 10, offset = 10) {
    try {
      const response = await fetch(
        `${this._API_URL}characters?nameStartsWith=${name}&limit=${limit}&offset=${offset}&apikey=${this._API_KEY}`
      );
      
      const result = await response.json();

      if (response.ok) {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      return [];
    }
  },
};
