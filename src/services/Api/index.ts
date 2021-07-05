export const Api = {
  _API_URL: process.env.REACT_APP_API_URL,
  _API_KEY: process.env.REACT_APP_API_KEY,

  /**
   Get character list
   */
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

  /**
   * Get character by name
   */
  async getCharacter(name: string, limit = 10, offset = 10): Promise<any> {
    let param = ``;
    
    if (name && name !== "") {
      param = `nameStartsWith=${name}`;
    }

    try {
      const response = await fetch(
        `${this._API_URL}characters?${param}&limit=${limit}&offset=${offset}&apikey=${this._API_KEY}`
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

  /**
   * Get character by id
   */
  async getCharacterById(id: number | string): Promise<any> {
    if (!id || id === "") {
      throw new Error("Parâmetro <id> obrigatório");
    }

    try {
      const response = await fetch(
        `${this._API_URL}characters/${id}?apikey=${this._API_KEY}`
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

  /**
   * Get comics by characterid
   */
  async getComics(charId: number | string): Promise<any> {
    if (!charId || charId === "") {
      throw new Error("Parâmetro <charId> obrigatório");
    }

    try {
      const response = await fetch(
        `${this._API_URL}characters/${charId}/comics?apikey=${this._API_KEY}`
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
