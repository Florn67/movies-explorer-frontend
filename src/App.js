import "../src/vendor/normalize.css";
import "../src/vendor/fonts/fonts.css";
import "./App.css";
import React, { useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies.js";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import mainApi from "./utils/MainApi.";
function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();
  function onLoginSubmit(mail, password) {
    mainApi
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
    mainApi.signUp(name, mail, password).catch((err) => {
      console.log(`Ошибка.....: ${err}`);
    });
  }
 
    mainApi
      .getMovies()
      .then((data) => {
        console.log('data :>> ', data);
      
      })
      .catch((err) => {
        console.log(`Ошибка.....: ${err}`);
      });
  
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/sign-up">
          <Register onRegisterSubmit={onRegisterSubmit} />
        </Route>
        <Route path="/sign-in">
          <Login onLoginSubmit={onLoginSubmit} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
