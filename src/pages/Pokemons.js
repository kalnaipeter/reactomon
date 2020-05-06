import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonImage from "../PokemonImage";

const Pokemons = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results));
  }, []);

  if (!isLoading) {
    return <div style={loadingStyle}>Loading...</div>;
  } else {
    return (
      <div className="App">
        <ul>
          {pokemons.map((pokemon, index) => (
            <React.Fragment key={index}>
              <div style={pokemonStyle}>
                <p>{pokemon.name}</p>
                <PokemonImage url={pokemon.url} />
                <br />
                <Link key={index} to={"/pokemon/" + (index + 1)}>
                  Details
                </Link>
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
};

const pokemonStyle = {
  backgroundColor: "#FFFF00",
  width: 200,
  float: "left",
  padding: 20,
  margin: 30,
  borderRadius: 20,
};

const loadingStyle = {
  size: 200,
  textAlign: "right",
};

export default Pokemons;
