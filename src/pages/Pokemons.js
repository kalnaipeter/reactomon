import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Pokemons extends Component {
  state = {
    isloaded: false,
    pokemons: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) =>
      this.setState({
        isloaded: true,
        pokemons: res.data.results,
      })
    );
  }

  render() {
    if (!this.state.isloaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {this.state.pokemons.map((pokemon, index) => (
              <React.Fragment key={index}>
                <p>{pokemon.name}</p>
                <Link key={index} to={"/pokemon/" + (index + 1)}>
                  Details
                </Link>
              </React.Fragment>
            ))}
          </ul>
        </div>
      );
    }
  }
}
export default Pokemons;
