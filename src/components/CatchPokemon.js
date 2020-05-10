import React, { useContext } from "react";
import { CatchThemAllContext } from "../context/CatchThemAll";
import styled from "styled-components";

const PokeBallButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: 80px;
  background-size: cover;
`;

export function CatchPokemon(props) {
  const { addCatchedPokemon } = useContext(CatchThemAllContext);

  function CatchBall() {
    addCatchedPokemon(props.name, props.url, props.id);
  }

  return (
    <PokeBallButton onClick={CatchBall} alt="catchpokemon">
      Catch it!
    </PokeBallButton>
  );
}

export default CatchPokemon;
