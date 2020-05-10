import React from "react";
import { useHttp } from "../hooks/http";
import styled from "styled-components";

const StyledPokemonDetail = styled.div`
  text-align: center;
  padding: 40px;
  width: 960px;
  margin: auto;
  border-radius: 20px;
  position: relative;
  background-color: ${(props) => props.theme.ListBackgroundColor};
  & img:first-of-type {
    padding: 20px;
    width: 20%;
  }
`;

const PokemonDetail = (props) => {
  var url = window.location.href.replace(/\/$/, "");
  var lastSeg = url.substr(url.lastIndexOf("/") + 1);

  const [isLoading, fetchedData] = useHttp(
    `https://pokeapi.co/api/v2/pokemon/${lastSeg}`,
    []
  );

  const pokemonData = fetchedData
    ? {
        name: fetchedData.data.name,
        abilities: fetchedData.data.abilities.map((e) => e.ability.name),
        types: fetchedData.data.types.map((e) => e.type.name),
        height: fetchedData.data.height,
        weight: fetchedData.data.weight,
        imageUrl: fetchedData.data.sprites.front_default,
      }
    : [];

  if (!isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <StyledPokemonDetail>
        <img src={pokemonData.imageUrl} alt={pokemonData.name} />
        <h2>{pokemonData.name}</h2>
        <p>Height: {pokemonData.height} dm</p>
        <p>Weight: {pokemonData.weight} hg</p>
        <div className="abilities">
          <h4>Abilities:</h4>
          <span>{(pokemonData.abilities || []).join(", ")}</span>
        </div>
        <div className="types">
          <h4>Types:</h4>
          <span>{(pokemonData.types || []).join(", ")}</span>
        </div>
      </StyledPokemonDetail>
    );
  }
};

export default React.memo(PokemonDetail);
