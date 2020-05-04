import React, { Component } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemons from "./pages/Pokemons";
import Types from "./pages/Types";
import PokemonDetail from "./pages/PokemonDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/types" component={Types} />
          <Route path="/pokemon" component={PokemonDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
