import React from "react";
import { useHttp } from "../hooks/http";

const PokemonDetail = (props) => {
  var url = window.location.href.replace(/\/$/, "");
  var lastSeg = url.substr(url.lastIndexOf("/") + 1);

  const [isLoading, fetchedData] = useHttp(
    `https://pokeapi.co/api/v2/pokemon/${lastSeg}`,
    []
  );

  const pokemonData = fetchedData
    ? {
        weight: fetchedData.data.weight,
        height: fetchedData.data.height,
      }
    : [];

  if (!isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        {/* {this.state.abilities.map((ability) => (
            ability === "ability"){
              ability.map((data) => (<p>{data.name}</p>))
            }))} */}
        <p>Pokemon's height is {pokemonData.height}</p>
        <p>Pokemon's weight is {pokemonData.weight}</p>
        {/* {[...this.state.abilities.filter((ability) => ability === "1")].map(
            (data) => (
              <p>{data}</p>
            )
          )} */}
      </div>
    );
  }
};

export default React.memo(PokemonDetail);
