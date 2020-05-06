import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetail = (props) => {
  const [height, setHeight] = useState([]);
  const [weight, setWeight] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    var url = window.location.href.replace(/\/$/, "");
    var lastSeg = url.substr(url.lastIndexOf("/") + 1);

    setIsLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${lastSeg}`).then((res) => {
      setWeight(res.data.weight);
      setHeight(res.data.height);
    });
  }, []);

  if (!isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        {/* {this.state.abilities.map((ability) => (
            ability === "ability"){
              ability.map((data) => (<p>{data.name}</p>))
            }))} */}
        <p>Pokemon's height is {height}</p>
        <p>Pokemon's weight is {weight}</p>
        {/* {[...this.state.abilities.filter((ability) => ability === "1")].map(
            (data) => (
              <p>{data}</p>
            )
          )} */}
      </div>
    );
  }
};

export default PokemonDetail;
