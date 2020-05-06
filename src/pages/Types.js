import React, { useEffect, useState } from "react";
import axios from "axios";

const Types = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);

  if (!isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <ul>
          {types.map((type) => (
            <p>{type.name}</p>
          ))}
        </ul>
      </div>
    );
  }
};

export default Types;
