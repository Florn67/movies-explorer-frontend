import "../src/vendor/normalize.css";
import "../src/vendor/fonts/fonts.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies.js";
import SavedMovies from "./components/SavedMovies/SavedMovies";
function App() {
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
      </Switch>
    </div>
  );
}

export default App;
