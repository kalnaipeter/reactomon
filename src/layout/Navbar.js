import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <img src={require("./pokémon.png")} alt="pokémon" style={imageStyle} />
      <br />
      <br />
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      <Link style={linkStyle} to="/pokemons">
        Pokemons
      </Link>{" "}
      <Link style={linkStyle} to="/types">
        Types
      </Link>
    </div>
  );
}

const linkStyle = {
  backgroundColor: "#0000FFFF",
  color: "white",
  padding: 14,
  textAlign: "center",
  textDecoration: "none",
  display: "inline - block",
  borderRadius: 70,
  marginRight: 10,
  marginLeft: 10,
};

const imageStyle = {
  width: 560,
  height: 200,
  resizeMode: "stretch",
  marginLeft: "auto",
  marginRight: "auto",
};

export default Navbar;
