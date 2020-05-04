import React, { Component } from "react";
import axios from "axios";

class Types extends Component {
  state = {
    isloaded: false,
    types: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/type").then((res) =>
      this.setState({
        isloaded: true,
        types: res.data.results,
      })
    );
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.types.map((type) => (
            <p>{type.name}</p>
          ))}
        </ul>
      </div>
    );
  }
}

export default Types;
