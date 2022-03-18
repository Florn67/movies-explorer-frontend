const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(handleResponse);
  }
  signUp(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    }).then(handleResponse);
  }
  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then(handleResponse);
  }
  saveMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: `https://api.nomoreparties.co/${data.trailerLink}`,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
        movieId: data.id,
      }),
    }).then(handleResponse);
  }
  deleteMovie(id){
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
      
    })
  }
}

const mainApi = new MainApi({
  baseUrl: "http://localhost:3001",
  headers: {
    // http://movies-explorer-aleksandr.nomoredomains.work
    // authorization: "1b5ba567-e5a7-4e1f-bced-8207d5690e1d",
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token"),
  },
});

export default mainApi;
