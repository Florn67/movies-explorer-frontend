import "../src/vendor/normalize.css";
import "../src/vendor/fonts/fonts.css";
import "./App.css";
import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies.js";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import mainApi, { MainApi } from "./utils/MainApi";
import Preloader from "./components/Preloader/Preloader";

const defaultProfile = {
  email: "",
  name: "",
};

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [profile, setProfile] = React.useState(defaultProfile);
  const [userId, setUserId] = React.useState(null);
  const [savedMoviesList, changeSavedMoviesList] = React.useState([]);
  const [profileFetchResult, setProfileFetchResult] = React.useState("");
  const history = useHistory();

  function clearData() {
    localStorage.clear();
    mainApi.clearToken();
    setLoggedIn(false);
    setUserId((_) => null);
    changeSavedMoviesList([]);
    setProfile(defaultProfile);
    history.push("/");
  }

  function onLoginSubmit(mail, password) {
    return mainApi
      .signIn(mail, password)
      .then(async ({ token }) => {
        console.group("onLoginSubmit → signIn");
        localStorage.setItem("token", token);      

        //* Получаем профиль
        await mainApi
          .checkToken(token)
          .then(({ data }) => {
            setProfile({ email: data.email, name: data.name });
          })
          .catch((err) => {
            console.log(`checkToken Ошибка.....: ${err}`);
          });

        //* Получаем сохранённые фильмы
        await mainApi.getUser().then(({ _id }) => {
          setUserId((_) => _id);
          mainApi
            .getMovies()
            .then(({ data }) => {
              const userFilms = data.filter(({ owner }) => owner === _id);
              console.log(_id, data, userFilms);
              changeSavedMoviesList(userFilms);
            })
            .catch((err) =>
              console.log(`signIn→getMovies Ошибка.....: ${err}`)
            );
        });
        console.groupEnd();
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(`signIn Ошибка.....: ${err}`);
      });
  }
  function onRegisterSubmit(name, mail, password) {
    return mainApi
      .signUp(name, mail, password)
      .then(() => {
        onLoginSubmit(mail, password);
      })
      .catch((err) => {
        console.log(`Ошибка.....: ${err}`);
      });
  }

  function onProfileSubmit(name, email) {
    return mainApi
      .changeProfile(name, email)
      .then((res) => {
        setProfile({ email: res.data.email, name: res.data.name });
        setProfileFetchResult(true);
      })
      .catch((err) => {
        setProfileFetchResult(false);
        console.log(`Ошибка.....: ${err}`);
      });
  }

  React.useEffect(async () => {
    if (!loggedIn && localStorage.getItem("token")) {
      await mainApi.getUser().then((res) => setUserId(res._id));
      await mainApi
        .checkToken(localStorage.getItem("token"))
        .then((res) => {
          setLoggedIn(true);
          // if (profile.name !== res.data.name || profile.email !== res.data.email)
          setProfile({ email: res.data.email, name: res.data.name });
        })
        .catch((err) => {
          console.log(`Ошибка.....: ${err}`);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [loggedIn]);

  if (loading) return <Preloader />;

  return (
    <div className="App">
      <h1>
        <table>
          <tbody>
            <tr>
              <td>userId</td>
              <td>{userId}</td>
            </tr>
            <tr>
              <td>saved-movies</td>
              <td>{JSON.stringify(savedMoviesList.map((x) => x.owner))}</td>
            </tr>
            <tr>
              <td>profile</td>
              <td>{profile.email + " " + profile.name}</td>
            </tr>
          </tbody>
        </table>
      </h1>
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>
        <ProtectedRoute loggedIn={loggedIn} path="/movies">
          <Movies userId={userId} loggedIn={loggedIn} />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/saved-movies">
          <SavedMovies
            savedMoviesList={savedMoviesList}
            changeSavedMoviesList={changeSavedMoviesList}
            userId={userId}
            loggedIn={loggedIn}
          />
        </ProtectedRoute>
        <Route path="/sign-up">
          {loggedIn ? (
            <Redirect to="/" />
          ) : (
            <Register onRegisterSubmit={onRegisterSubmit} />
          )}
        </Route>
        <Route path="/sign-in">
          {loggedIn ? (
            <Redirect to="/" />
          ) : (
            <Login onLoginSubmit={onLoginSubmit} />
          )}
        </Route>
        <ProtectedRoute loggedIn={loggedIn} path="/profile">
          <Profile
            result={profileFetchResult}
            onProfileSubmit={onProfileSubmit}
            profile={profile}
            setLoggedIn={setLoggedIn}
            clearData={clearData}
          />
        </ProtectedRoute>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
