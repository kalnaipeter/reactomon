import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LinkButton from "../components/LinkButton";

const theme = {
  primary: "green",
  secondary: "blue",
  alert: "red",
};

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <img src={require("./pokémon.png")} alt="pokémon" style={imageStyle} />
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
        </LinkButton>
      </div>
    </ThemeProvider>
  );
}

const imageStyle = {
  width: 560,
  height: 200,
  resizeMode: "stretch",
  marginLeft: "auto",
  marginRight: "auto",
};

export default Navbar;
