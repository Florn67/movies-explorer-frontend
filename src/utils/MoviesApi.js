const handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

class MoviesApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
    getMovies() {
        return fetch(`${this._baseUrl}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          
        }).then(handleResponse);
      }
}

const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default moviesApi;