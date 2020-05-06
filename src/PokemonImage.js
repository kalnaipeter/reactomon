import React, { Component } from "react";
import axios from "axios";

class PokemonImage extends Component {
  state = {
    image: "",
  };

  componentDidMount() {
    axios
      .get(this.props.url)
      .then((res) =>
        axios
          .get(res.data.forms[0].url)
          .then((resp) =>
            this.setState({ image: resp.data.sprites.front_default })
          )
      );
  }

  render() {
    return <img src={this.state.image} alt="pokemon" />;
  }
}

export default PokemonImage;
