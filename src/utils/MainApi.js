const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export class MainApi {
  static _headers = {};
  static _baseUrl = {};

  constructor({ baseUrl, headers }) {
    MainApi._baseUrl = baseUrl;
    MainApi._headers = headers;
  }
  //*============ Взаимодействие с хедерами
  _updateHeaders() {
    MainApi._headers = {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    };
  }
  clearToken() {
    MainApi._headers = {
      "Content-Type": "application/json",
      authorization: null,
    };
  }

  //*============ Запросы на аутентификацию
  signIn(email, password) {
    return fetch(`${MainApi._baseUrl}/signin`, {
      method: "POST",
      headers: MainApi._headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(handleResponse);
  }
  signUp(name, email, password) {
    return fetch(`${MainApi._baseUrl}/signup`, {
      method: "POST",
      headers: MainApi._headers,
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    }).then(handleResponse);
  }
  checkToken(token) {
    if (!token) 
    return fetch(`${MainApi._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  }
  //*============ Запросы на фильмы
  getMovies() {
    return fetch(`${MainApi._baseUrl}/movies`, {
      method: "GET",
      headers: MainApi._headers,
    }).then(handleResponse);
  }
  saveMovie(data) {
    return fetch(`${MainApi._baseUrl}/movies`, {
      method: "POST",
      headers: MainApi._headers,
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
        owner: data.owner,
      }),
    }).then(handleResponse);
  }
  deleteMovie(id) {
    return fetch(`${MainApi._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: MainApi._headers,
    });
  }
  //*============ Запрос на профиль
  changeProfile(name, email) {
    return fetch(`${MainApi._baseUrl}/users/me`, {
      method: "PATCH",
      headers: MainApi._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(handleResponse);
  }
  getUser() {
    if (MainApi._headers.authorization === null) this._updateHeaders();

    return fetch(`${MainApi._baseUrl}/users/me`, {
      headers: MainApi._headers,
    })
      .then(handleResponse)
      .then((result) => {
        return {
          name: result.data.name,
          about: result.data.about,
          avatarUrl: result.data.avatar,
          _id: result.data._id,
        };
      });
  }
}

const mainApi = new MainApi({
  // http://movies-explorer-aleksandr.nomoredomains.work
  baseUrl: "http://movies-explorer-aleksandr.nomoredomains.work",
  headers: {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token"),
  },
});

export default mainApi;
