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
import mainApi from "./utils/MainApi.";
import Preloader from "./components/Preloader/Preloader";
function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [profile, setProfile] = React.useState({
    email: "guest",
    name: "guest",
  });
  const [userId, setUserId] = React.useState('')
  mainApi.getUser().then(res => setUserId(res._id))

  const [profileFetchResult, setProfileFetchResult] = React.useState("");
  const history = useHistory();
  function onLoginSubmit(mail, password) {
    return mainApi
      .signIn(mail, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(`Ошибка.....: ${err}`);
      });
  }
  function onRegisterSubmit(name, mail, password) {
    return mainApi
      .signUp(name, mail, password)
      .then(() => {
        history.push("/movies");
      })
      .catch((err) => {
        console.log(`Ошибка.....: ${err}`);
      });
  }

  function onProfileSubmit(name, email) {
    return mainApi
      .changeProfile(name, email)
      .then((res) => {
        console.log(res);
        setProfile({ email: res.data.email, name: res.data.name });
        setProfileFetchResult(true);
      })
      .catch((err) => {
        setProfileFetchResult(false);
        console.log(`Ошибка.....: ${err}`);
      });
  }

  React.useEffect(() => {
    mainApi
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
  }, [loggedIn]);

  if (loading) return <Preloader />;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
        </Route>
        <ProtectedRoute loggedIn={loggedIn} path="/movies">
          <Movies userId={userId} loggedIn={loggedIn} />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/saved-movies">
          <SavedMovies userId={userId} loggedIn={loggedIn} />
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
