import React from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemons from "./pages/Pokemons";
import Types from "./pages/Types";
import PokemonDetail from "./pages/PokemonDetail";
import { CatchThemAllProvider } from "./context/CatchThemAll";
import CatchedPokemons from "./pages/CatchedPokemons";

const App = (props) => {
  return (
    <CatchThemAllProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/types" component={Types} />
          <Route path="/pokemon" component={PokemonDetail} />
          <Route path="/catchedpokemons" component={CatchedPokemons} />
        </div>
      </Router>
    </CatchThemAllProvider>
  );
};

export default App;
