import React from "react";
import { ThemeProvider } from "styled-components";
import LinkButton from "../components/LinkButton";
import styled from "styled-components";

const theme = {
  primary: "green",
  secondary: "blue",
  alert: "red",
};

const PokemonLogo = styled.img`
  width: 560px;
  height: 200px;
  resize-mode: stretch;
  margin-left: auto;
  margin-right: auto;
`;

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <PokemonLogo src={require("./pokémon.png")} alt="pokémon" />
        <br />
        <br />
        <LinkButton color="primary" to="/">
          Home
        </LinkButton>{" "}
        <LinkButton color="secondary" to="/pokemons">
          Pokemons
        </LinkButton>{" "}
        <LinkButton color="secondary" to="/types">
          Types
        </LinkButton>{" "}
        <LinkButton color="secondary" to="/catchedpokemons">
          Catched
        </LinkButton>
      </div>
    </ThemeProvider>
  );
}

export default Navbar;
