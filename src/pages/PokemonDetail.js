import React, { Component } from "react";
import axios from "axios";

class PokemonDetail extends Component {
  state = {
    isloaded: false,
    // abilities: [],
    height: "",
    weight: "",
  };

  componentDidMount() {
    var url = window.location.href.replace(/\/$/, "");
    var lastSeg = url.substr(url.lastIndexOf("/") + 1);

    axios.get(`https://pokeapi.co/api/v2/pokemon/${lastSeg}`).then((res) =>
      this.setState({
        isloaded: true,
        height: res.data.height,
        weight: res.data.weight,
      })
    );
  }

  render() {
    if (!this.state.isloaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          {/* {this.state.abilities.map((ability) => (
            ability === "ability"){
              ability.map((data) => (<p>{data.name}</p>))
            }))} */}
          <p>Pokemon's height is {this.state.height}</p>
          <p>Pokemon's weight is {this.state.weight}</p>
          {/* {[...this.state.abilities.filter((ability) => ability === "1")].map(
            (data) => (
              <p>{data}</p>
            )
          )} */}
        </div>
      );
    }
  }
}

export default PokemonDetail;
