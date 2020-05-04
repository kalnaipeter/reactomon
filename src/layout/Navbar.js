import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/pokemons">Pokemons</Link> |{" "}
      <Link to="/types">Types</Link>
    </div>
  );
}

export default Navbar;
