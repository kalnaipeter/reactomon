import React, { useEffect } from "react";
import { useHttp } from "../hooks/http";
import PokemonCard from "../components/PokemonCard";
import LoadingStyle from "../components/LoadingStyle";

const Pokemons = (props) => {
  const [isLoading, fetchedData] = useHttp(
    "https://pokeapi.co/api/v2/pokemon",
    []
  );

  const pokemons = fetchedData ? fetchedData.data.results : [];

  useEffect(() => {
    return () => {
      console.log("component did unmount");
    };
  }, []);

  if (!isLoading) {
    return <LoadingStyle>Loading...</LoadingStyle>;
  } else {
    return (
      <ul>
        {pokemons.map((pokemon, index) => (
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
    );
  }
};

export default React.memo(Pokemons);
