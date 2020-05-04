import React, { Component } from "react";
import axios from "axios";

export class PokemonDetail extends Component {
  state = {
    isloaded: false,
    pokemon: [],
  };

  componentDidMount() {
    var url = window.location.href.replace(/\/$/, "");
    var lastSeg = url.substr(url.lastIndexOf("/") + 1);

    axios.get(`https://pokeapi.co/api/v2/pokemon/${lastSeg}`).then((res) =>
      this.setState({
        isloaded: true,
        pokemon: res.data.abilities,
      })
    );
  }

  render() {
    if (!this.state.isloaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <p>asd</p>
        </div>
      );
    }
  }
}

export default PokemonDetail;
