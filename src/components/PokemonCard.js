import React from "react";
import { CatchPokemon } from "../components/CatchPokemon";
import PokemonImage from "../PokemonImage";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PokemonStyle = styled.div`
  background-color: #ffff00;
  width: 200px;
  float: left;
  padding: 20px;
  margin: 30px;
  border-radius: 20px;
`;

const PokemonCard = (props) => {
  return (
    <PokemonStyle>
      <p>{props.name}</p>
      <PokemonImage url={props.url} />
      <br />
      <Link key={props.index} to={"/pokemon/" + props.id}>
        Details
      </Link>
      <br />
      <CatchPokemon name={props.name} url={props.url} id={props.id} />
    </PokemonStyle>
  );
};

export default PokemonCard;
