import React, { useContext } from "react";
import { CatchThemAllContext } from "../context/CatchThemAll";
import PokemonCard from "../components/PokemonCard";

const CatchedPokemons = (props) => {
  const { catchedPokemons } = useContext(CatchThemAllContext);

  return (
    <ul>
      <ul>
        {catchedPokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            url={pokemon.url}
            index={index}
            id={pokemon.url
              .replace(/\/$/, "")
              .substr(pokemon.url.replace(/\/$/, "").lastIndexOf("/") + 1)}
          />
        ))}
      </ul>
    </ul>
  );
};

export default React.memo(CatchedPokemons);
